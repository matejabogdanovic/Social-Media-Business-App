import RoundImage from "../../../../common/RoundImage";
import CompanyProfileIcon from "./CompanyProfileIcon";
import { ProfileData } from "../../ProfilePage";

const Bubble = ({ data }: { data: ProfileData | undefined }) => {
  return (
    <div className=" flex xl:flex-row flex-col  bg-light xl:rounded-full rounded-xl items-center flex-wrap m-4 gap-x-4 p-2 xl:pr-6 ">
      <RoundImage
        photoUrl={data?.photoUrl}
        className="w-[150px]   border-light  "
      />
      <div className="flex flex-col ">
        <div className="font-semibold text-xl xl:text-2xl ">
          {data?.type == "REGULAR" ? (
            data?.fname + " " + data?.lname
          ) : (
            <div className="flex flex-wrap gap-x-1 ">
              {data?.companyName} <CompanyProfileIcon />
            </div>
          )}
        </div>

        <div>{data?.description}</div>
        <div className="text-dark-200">{data?.location}</div>
      </div>
    </div>
  );
};

export default Bubble;
