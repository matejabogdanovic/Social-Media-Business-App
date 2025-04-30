import { FaComment } from "react-icons/fa6";

import Button from "../../../../common/Button";

const CommentButton = ({ commentNumber }: { commentNumber: number }) => {
  return (
    <Button>
      <FaComment />
      {commentNumber}
    </Button>
  );
};

export default CommentButton;
