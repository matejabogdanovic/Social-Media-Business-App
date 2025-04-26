import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "../sections/navbar/Navbar";

const NavbarLayout = () => {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-auto">
        <Outlet context={useOutletContext()} />
      </div>
    </div>
  );
};

export default NavbarLayout;
