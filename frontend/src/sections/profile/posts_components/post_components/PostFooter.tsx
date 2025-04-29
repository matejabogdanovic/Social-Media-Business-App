import { FaComment, FaThumbsUp } from "react-icons/fa6";

import Button from "../../../../common/Button";
import { PostContextType, usePostContext } from "../Post";

const PostFooter = () => {
  const post: PostContextType = usePostContext();
  if (!post) return;
  return (
    <div className="w-full flex justify-end gap-2 flex-wrap-reverse ">
      <Button>
        <FaComment />
        {post.data.commentNumber}
      </Button>

      <Button style="REGULAR_OUTLINE">
        <FaThumbsUp />
        {post.data.likeNumber}
      </Button>
    </div>
  );
};

export default PostFooter;
