import { UserPreviewType } from "../../chats/chat_components/chat_messages_components/Message";
import CommentButton from "./post_components/CommentButton";
import LikeButton from "./post_components/LikeButton";
import PostGallery from "./post_components/PostGallery";
import PostHeader from "./post_components/PostHeader";

import { createContext, useContext, useState } from "react";

export type PostData = {
  id: number;
  content: string[];
  description: string;
  date: string;
  likeNumber: number;
  commentNumber: number;
  isLiked: boolean;
};
export type PostContextType = {
  setPostData: React.Dispatch<React.SetStateAction<PostData>>;
  data: PostData;
  userData: UserPreviewType;
} | null;

const PostContext = createContext<PostContextType>(null);

export const usePostContext = () => useContext(PostContext);

const Post = ({
  data,
  userData,
}: {
  data: PostData;
  userData: UserPreviewType;
}) => {
  const [postData, setPostData] = useState<PostData>(data);

  return (
    <div className="flex flex-col items-start xl:border-[1px] border-b-[1px] border-slate-300 xl:rounded-xl p-4 gap-2 my-4">
      <PostContext.Provider
        value={{ data: postData, userData, setPostData: setPostData }}
      >
        <PostHeader />

        <div>{data.description}</div>

        <PostGallery className="w-full flex items-center justify-center bg-gray-200" />

        <div className="w-full flex justify-end gap-2 flex-wrap-reverse ">
          <CommentButton commentNumber={data.commentNumber} />
          <LikeButton />
        </div>
      </PostContext.Provider>
    </div>
  );
};

export default Post;
