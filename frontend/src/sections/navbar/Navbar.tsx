import { HiHome } from "react-icons/hi";
import Container from "../../common/Container";
import NavbarLink from "./NavbarLink";
import { TbMessageFilled } from "react-icons/tb";
import { All } from "../../roles/All";
import { useOutletContext } from "react-router-dom";
import { BiUser } from "react-icons/bi";

const Navbar = ({ className = "" }: { className?: string }) => {
  const { user }: { user: All } = useOutletContext();
  return (
    <nav className={"bg-light border-b-[1px]   border-dark-50  " + className}>
      <Container className="flex justify-between [&_a]:p-2 p-2 ">
        <NavbarLink to={"/"}>
          <HiHome />
        </NavbarLink>
        <div className="flex gap-2">
          <NavbarLink to={"/chats"}>
            <TbMessageFilled />
          </NavbarLink>
          <NavbarLink to={`/profile/${user.getUsername()}`}>
            <BiUser />
          </NavbarLink>
        </div>
        {/* <NavbarLink to={`/settings`}>
          <SlSettings />
        </NavbarLink> */}
      </Container>
    </nav>
  );
};

export default Navbar;
