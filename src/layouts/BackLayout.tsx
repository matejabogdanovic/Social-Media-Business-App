import { Outlet, useOutletContext } from "react-router-dom";
import BackButton from "../common/BackButton";

const BackLayout = () => {
  return (
    <>
      <BackButton />
      <Outlet context={useOutletContext()} />
    </>
  );
};

export default BackLayout;
