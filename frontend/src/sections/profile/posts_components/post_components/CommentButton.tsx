import { FaComment } from "react-icons/fa6";

import Button from "../../../../common/Button";

const CommentButton = ({
  commentNumber,
  onClick,
}: {
  commentNumber: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button onClick={onClick}>
      <FaComment />
      {commentNumber}
    </Button>
  );
};

export default CommentButton;
