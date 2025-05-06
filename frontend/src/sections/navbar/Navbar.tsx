import { NavLink } from "react-router-dom";

import { FiMessageSquare } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import Container from "../../common/Container";

const Navbar = ({ className = "" }: { className?: string }) => {
  return (
    <nav
      className={
        "bg-light border-b-[1px] border-dark-900 border-opacity-20 " + className
      }
    >
      <Container className="flex justify-between [&>*]:p-4 ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "opacity-30" : "opacity-100"
          }
        >
          <HiHome />
        </NavLink>
        <NavLink
          to={"/chats"}
          className={({ isActive }) =>
            isActive ? "opacity-30" : "opacity-100"
          }
        >
          <FiMessageSquare />
        </NavLink>
      </Container>
    </nav>
  );
};

export default Navbar;
