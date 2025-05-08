import { Link, LinkProps } from "react-router-dom";

export type styleType =
  | "REGULAR"
  | "REGULAR_GRADIENT"
  | "ACCENT"
  | "DANGER"
  | "GOOD"
  | "DISABLED"
  | "DANGER_OUTLINE"
  | "REGULAR_OUTLINE"
  | "ACCENT_OUTLINE"
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
        "from-primary to-accent bg-gradient-to-r  text-light outline-transparent ",
    },
    {
      style: "REGULAR",
      styling: "bg-primary text-light outline-transparent ",
    },
    {
      style: "REGULAR_OUTLINE",
      styling: "bg-inherit text-primary outline-primary  ",
    },

    {
      style: "ACCENT",
      styling: "bg-accent b text-light outline-transparent  ",
    },
    {
      style: "ACCENT_OUTLINE",
      styling: "bg-inherit text-accent outline-accent ",
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
