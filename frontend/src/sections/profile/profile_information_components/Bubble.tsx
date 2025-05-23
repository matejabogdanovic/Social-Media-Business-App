import RoundImage from "../../../common/RoundImage";

import { ProfileData } from "../ProfilePage";
import Info from "./Info";

const Bubble = ({ data }: { data: ProfileData | undefined }) => {
  return (
    <div className=" xl:flex hidden xl:flex-row flex-col  bg-light xl:rounded-full rounded-t-xl -mb-2 items-center flex-wrap m-2 gap-x-4 p-2 xl:pr-6   ">
      <RoundImage
        photoUrl={data?.photoUrl}
        className="w-[150px]   border-light  "
      />
      <Info data={data} />
    </div>
  );
};

export default Bubble;
