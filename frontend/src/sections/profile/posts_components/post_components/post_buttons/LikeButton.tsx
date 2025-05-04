import { FaThumbsUp } from "react-icons/fa6";
import Button from "../../../../../common/Button";
import { PostContextType, usePostContext } from "../../Post";

const LikeButton = () => {
  const post: PostContextType = usePostContext();
  if (!post) return null;
  return (
    <Button
      style={post.data.isLiked ? "REGULAR" : "REGULAR_OUTLINE"}
      onClick={() => {
        const newPostData = {
          ...post.data,
          likeNumber: post.data.likeNumber + (post.data.isLiked ? -1 : 1),
          isLiked: !post.data.isLiked,
        };
        post.setPostData(newPostData);

        // todo send notification that it's liked/unliked
      }}
    >
      <FaThumbsUp className={post.data.isLiked ? "animate-likeBounce " : ""} />
      {post.data.likeNumber}
    </Button>
  );
};

export default LikeButton;
