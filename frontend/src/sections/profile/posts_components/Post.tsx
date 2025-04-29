import { UserPreviewType } from "../../chats/chat_components/chat_messages_components/Message";
import PostGallery from "./post_components/PostGallery";
import PostHeader from "./post_components/PostHeader";
import PostFooter from "./post_components/PostFooter";
import { createContext, useContext } from "react";

export type PostData = {
  id: number;
  content: string[];
  description: string;
  date: string;
  likeNumber: number;
  commentNumber: number;
};
export type PostContextType = {
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
  return (
    <div className="flex flex-col items-start xl:border-[1px] border-b-[1px] border-slate-300 xl:rounded-xl p-4 gap-2 my-4">
      <PostContext.Provider value={{ data, userData }}>
        <PostHeader />

        <div>{data.description}</div>

        <PostGallery className="w-full flex items-center justify-center bg-gray-200" />

        <PostFooter />
      </PostContext.Provider>
    </div>
  );
};

export default Post;
