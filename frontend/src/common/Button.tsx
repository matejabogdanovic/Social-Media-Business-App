import { Link, LinkProps } from "react-router-dom";

export type styleType =
  | "REGULAR"
  | "REGULAR_GRADIENT"
  | "dark-500"
  | "DANGER"
  | "GOOD"
  | "DISABLED"
  | "DANGER_OUTLINE"
  | "REGULAR_OUTLINE"
  | "dark-500_OUTLINE"
  | "GOOD_OUTLINE"
  | "DISABLED_OUTLINE";
const Button = ({
  to,
  type = "button",
  onClick,
  className = "",
  style = "REGULAR",
  disabled = false,
  ref,
  children,
}: {
  to?: LinkProps["to"];
  type?: "submit" | "reset" | "button";
  confirm?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: styleType;
  disabled?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  const stylings: {
    style: styleType;
    styling: string;
  }[] = [
    {
      style: "REGULAR_GRADIENT",
      styling:
        "from-dark-500 to-dark-500 bg-gradient-to-r  text-light outline-transparent ",
    },
    {
      style: "REGULAR",
      styling: "bg-dark-500 text-light outline-transparent ",
    },
    {
      style: "REGULAR_OUTLINE",
      styling: "bg-inherit text-dark-500 outline-dark-500  ",
    },

    {
      style: "dark-500",
      styling: "bg-dark-500 b text-light outline-transparent  ",
    },
    {
      style: "dark-500_OUTLINE",
      styling: "bg-inherit text-dark-500 outline-dark-500 ",
    },
    {
      style: "DANGER",
      styling: "bg-danger text-light outline-transparent",
    },
    {
      style: "DANGER_OUTLINE",
      styling: "bg-inherit text-danger outline-danger ",
    },
    {
      style: "GOOD",
      styling: "bg-good text-light outline-transparent",
    },
    {
      style: "GOOD_OUTLINE",
      styling: "bg-inherit text-good outline-good ",
    },
    {
      style: "DISABLED",
      styling: "bg-light text-light outline-transparent ",
    },
    {
      style: "DISABLED_OUTLINE",
      styling: "bg-inherit text-secondary-100 outline-secondary-100 ",
    },
  ];

  const button = (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={
        `${
          stylings.find((s) => s.style === style)?.styling
        } min-h-[44px] px-4 py-2 rounded-full items-center justify-center inline-flex gap-2  outline outline-2 -outline-offset-2 ` +
        className
      }
    >
      {children}
    </button>
  );
  if (to) return <Link to={to}>{button}</Link>;
  else return button;
};

export default Button;
