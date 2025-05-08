import { PostContextType, usePostContext } from "../Post";

const PostDescription = () => {
  const post: PostContextType = usePostContext();
  if (!post) return null;
  return (
    <div
      className={`overflow-y-auto ${
        post.data.content.length > 0 ? "max-h-[20vh]" : "max-h-[50vh]"
      }  `}
    >
      {post.data.description}
    </div>
  );
};

export default PostDescription;
