import { NavLink, NavLinkProps } from "react-router-dom";

const NavbarLink = ({
  to,
  children,
}: {
  to: NavLinkProps["to"];
  children: React.ReactNode;
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        (isActive
          ? "bg-dark-500 text-light fill-light"
          : "text-dark-500 bg-light fill-dark-500") +
        " rounded-full transition-colors text-base"
      }
    >
      {children}
    </NavLink>
  );
};

export default NavbarLink;
