import { Link } from "react-router-dom";
import CompanyProfileIcon from "../sections/profile/profile_information_components/CompanyProfileIcon";
import { SearchProfileData } from "../sections/search/Search";
import RoundImage from "./RoundImage";

const ProfilePreview = ({ data }: { data: SearchProfileData }) => {
  return (
    <Link
      to={`/profile/${data.username}`}
      className="card !p-2 flex gap-2 items-start overflow-x-auto"
    >
      <RoundImage photoUrl={data.photoUrl} className="w-[70px] min-w-[70px] " />
      <div>
        <div className="font-semibold">
          {data?.type == "REGULAR" ? (
            data?.fname + " " + data?.lname
          ) : (
            <div className="flex flex-wrap gap-x-1 ">
              {data?.companyName} <CompanyProfileIcon />
            </div>
          )}
        </div>
        <div>@{data.username}</div>
      </div>
    </Link>
  );
};

export default ProfilePreview;
