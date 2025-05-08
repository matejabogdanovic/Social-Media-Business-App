import { IoClose } from "react-icons/io5";

const CloseButton = ({
  onClick,
  className = "",
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) => {
  return (
    <button onClick={onClick} className={"rounded-full " + className}>
      <IoClose className="text-xl fill-dark-900" />
    </button>
  );
};

export default CloseButton;
