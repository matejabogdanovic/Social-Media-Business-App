import { Outlet, useLocation } from "react-router-dom";
import { All } from "../roles/All";
import { useEffect } from "react";

const MainLayout = () => {
  const user = new All(0, "");
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* <div>MainLayout</div> */}
      <Outlet context={{ user }} />
    </>
  );
};

export default MainLayout;
