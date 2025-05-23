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
        toggle === "user" ? "bg-primary" : "bg-accent-500"
      } rounded-full p-2 text-base text-light transition-colors`}
    >
      {toggle === "user" ? <BiUser /> : <MdBusinessCenter />}
    </button>
  );
};

export default ToggleUserOrJobButton;
