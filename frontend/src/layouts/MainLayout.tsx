import { Outlet } from "react-router-dom";
import { All } from "../roles/All";

const MainLayout = () => {
  const user = new All(0, "");
  return (
    <>
      {/* <div>MainLayout</div> */}
      <Outlet context={{ user }} />
    </>
  );
};

export default MainLayout;
