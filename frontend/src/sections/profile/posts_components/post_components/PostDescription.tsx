import { PostContextType, usePostContext } from "../Post";

const PostDescription = () => {
  const post: PostContextType = usePostContext();
  if (!post) return null;
  return (
    <div className="overflow-y-auto max-h-[20vh] ">{post.data.description}</div>
  );
};

export default PostDescription;
