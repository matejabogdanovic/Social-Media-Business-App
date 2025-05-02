import CommentButton from "./post_components/CommentButton";
import LikeButton from "./post_components/LikeButton";
import PostGallery from "./post_components/PostGallery";
import PostHeader from "./post_components/PostHeader";

import { createContext, useContext, useState } from "react";
import ShareButton from "./post_components/ShareButton";
import PostDescription from "./post_components/PostDescription";

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
  const showOverlay = () => {
    setOverlayShowing(true);
  };
  const hideOverlay = () => {
    setOverlayShowing(false);
  };
  return (
    <div className="flex flex-col items-start xl:border-[1px] border-b-[1px] border-slate-300 xl:rounded-xl p-4 gap-2 my-4">
      <PostContext.Provider
        value={{ data: postData, setPostData: setPostData }}
      >
        <PostHeader />

        <PostDescription />

        <PostGallery
          overlayShowing={overlayShowing}
          showOverlay={showOverlay}
          hideOverlay={hideOverlay}
          className="w-full flex items-center justify-center bg-gray-200"
        />

        <div className="w-full flex justify-end gap-2 flex-wrap-reverse ">
          <ShareButton />
          <CommentButton
            onClick={showOverlay}
            commentNumber={postData.commentNumber}
          />

          <LikeButton />
        </div>
      </PostContext.Provider>
    </div>
  );
};

export default Post;
