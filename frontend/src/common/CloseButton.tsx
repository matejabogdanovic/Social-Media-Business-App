import { IoClose } from "react-icons/io5";

const CloseButton = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className="rounded-full ">
      <IoClose className="text-xl fill-dark-900" />
    </button>
  );
};

export default CloseButton;
