import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "../sections/navbar/Navbar";

const NavbarXLLayout = () => {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Navbar className="xl:block hidden" />
      <div className="flex-1 overflow-auto">
        <Outlet context={useOutletContext()} />
      </div>
    </div>
  );
};

export default NavbarXLLayout;
