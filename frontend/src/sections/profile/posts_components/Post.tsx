import LikeButton from "./post_components/post_buttons/LikeButton";
import PostGallery from "./post_components/PostGallery";
import PostHeader from "./post_components/PostHeader";

import { createContext, useContext, useRef, useState } from "react";

import PostDescription from "./post_components/PostDescription";

import PostView from "./post_components/PostView";
import CommentButton from "./post_components/post_buttons/CommentButton";
import ShareButton from "./post_components/post_buttons/ShareButton";

export type PostData = {
  id: number;
  content: string[];
  description: string;
  date: string;
  likeNumber: number;
  commentNumber: number;
  isLiked: boolean;

  username: string;
  photoUrl: string;
};
export type PostContextType = {
  setPostData: React.Dispatch<React.SetStateAction<PostData>>;
  data: PostData;
} | null;

export const PostContext = createContext<PostContextType>(null);

export const usePostContext = () => useContext(PostContext);

const Post = ({ data }: { data: PostData }) => {
  const [postData, setPostData] = useState<PostData>(data);
  const [overlayShowing, setOverlayShowing] = useState<boolean>(false);
  const showComments = useRef<boolean>(false);
  const showOverlay = () => {
    setOverlayShowing(true);
  };
  const hideOverlay = () => {
    setOverlayShowing(false);
  };
  return (
    <div className="flex flex-col  items-start border-[1px]   border-dark-50  xl:rounded-xl bg-light p-4 gap-2 my-4">
      <PostContext.Provider
        value={{ data: postData, setPostData: setPostData }}
      >
        <PostHeader />

        <PostDescription />

        <PostGallery
          showOverlay={() => {
            showComments.current = false;
            showOverlay();
          }}
          className="w-full flex items-center justify-center  "
        />

        {/* overlay */}
        {overlayShowing && (
          <div className="absolute z-10 w-full h-full top-0 left-0 bg-dark-900 bg-opacity-50 flex items-center   ">
            <PostView
              showComments={showComments.current}
              hideOverlay={hideOverlay}
            />
          </div>
        )}

        <div className="w-full flex justify-end gap-2 flex-wrap-reverse ">
          <ShareButton />
          <CommentButton
            onClick={() => {
              showComments.current = true;
              showOverlay();
            }}
            commentNumber={postData.commentNumber}
          />

          <LikeButton />
        </div>
      </PostContext.Provider>
    </div>
  );
};

export default Post;
