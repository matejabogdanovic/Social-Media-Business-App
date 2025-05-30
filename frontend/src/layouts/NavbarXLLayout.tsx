import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import Navbar from "../sections/navbar/Navbar";
import { useEffect, useRef } from "react";

const NavbarXLLayout = () => {
  const { pathname } = useLocation();
  const scrollContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollContainer.current?.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="h-[100dvh] flex flex-col">
      <Navbar className="xl:block hidden" />
      <div className="flex-1 overflow-auto" ref={scrollContainer}>
        <Outlet context={useOutletContext()} />
      </div>
    </div>
  );
};

export default NavbarXLLayout;
