import { ProfileData } from "../../ProfilePage";
import CompanyProfileIcon from "./CompanyProfileIcon";

const Info = ({
  data,
  className,
}: {
  data: ProfileData | undefined;
  className?: string;
}) => {
  return (
    <div className={className}>
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
  );
};

export default Info;
