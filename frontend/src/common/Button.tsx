import { Link, LinkProps } from "react-router-dom";

export type styleType =
  | "REGULAR"
  | "DANGER"
  | "GOOD"
  | "DISABLED"
  | "DANGER_OUTLINE"
  | "REGULAR_OUTLINE"
  | "GOOD_OUTLINE"
  | "DISABLED_OUTLINE";
const Button = ({
  to,
  type = "button",
  onClick,

  style = "REGULAR",
  disabled = false,
  ref,
  children,
}: {
  to?: LinkProps["to"];
  type?: "submit" | "reset" | "button";
  confirm?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

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
      style: "REGULAR",
      styling: "bg-primary text-light border-transparent",
    },
    {
      style: "REGULAR_OUTLINE",
      styling: "bg-inherit text-primary border-primary ",
    },

    {
      style: "DANGER",
      styling: "bg-danger text-light border-transparent",
    },
    {
      style: "DANGER_OUTLINE",
      styling: "bg-inherit text-danger border-danger ",
    },
    {
      style: "GOOD",
      styling: "bg-good text-light border-transparent",
    },
    {
      style: "GOOD_OUTLINE",
      styling: "bg-inherit text-good border-good ",
    },
    {
      style: "DISABLED",
      styling: "bg-light text-light border-transparent",
    },
    {
      style: "DISABLED_OUTLINE",
      styling: "bg-inherit text-secondary-100 border-secondary-100 ",
    },
  ];

  const button = (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${
        stylings.find((s) => s.style === style)?.styling
      } min-h-[44px] px-4 py-2 rounded-full border-2 items-center justify-center inline-flex gap-2 `}
    >
      {children}
    </button>
  );
  if (to) return <Link to={to}>{button}</Link>;
  else return button;
};

export default Button;
