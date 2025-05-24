import { BiUser } from "react-icons/bi";
import { MdBusinessCenter } from "react-icons/md";

const ToggleUserOrJobButton = ({
  toggle,
  onClick,
}: {
  toggle: "user" | "job";
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        toggle === "user"
          ? "bg-transparent text-dark-500 "
          : "bg-dark-500 text-light"
      } rounded-full p-2 text-base  transition-colors`}
    >
      {toggle === "user" ? <BiUser /> : <MdBusinessCenter />}
    </button>
  );
};

export default ToggleUserOrJobButton;
