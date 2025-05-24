import { BiSend } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { useParams } from "react-router-dom";
import Banner from "./profile_information_components/Banner";
import { ProfileData } from "./ProfilePage";
import Button from "../../common/Button";
import FollowButton from "./profile_information_components/profile_information_buttons/FollowButton";
import RoundImage from "../../common/RoundImage";
import Info from "./profile_information_components/Info";

const ProfileInformation = ({ data }: { data: ProfileData | undefined }) => {
  const { username } = useParams();
  return (
    <div className="card !p-0 overflow-hidden relative">
      <Banner data={data} className="w-full min-h-[200px] " />
      <RoundImage
        photoUrl={data?.photoUrl}
        className="w-[150px] absolute top-[100px] left-[8px] border-[8px] border-light xl:hidden  "
      />

      <div className="xl:p-4 pt-[calc(50px+0.25rem)]  pb-4 px-4 flex justify-between  gap-x-4 gap-y-2 flex-wrap ">
        <Info data={data} className="flex flex-col xl:hidden" />

        <div className="flex  xl:justify-start  gap-x-4 gap-y-2 flex-wrap text-center  font-semibold text-dark-500 ">
          <div>
            Followers <div>{data?.followers}</div>
          </div>
          <div>
            Following <div>{data?.following}</div>
          </div>
        </div>
        <div className="flex items-end  gap-2 flex-wrap w-full xl:w-auto  ">
          <FollowButton />
          <Button to={`mailto:${data?.email}`}>
            <MdMail />
            Contact
          </Button>
          {data?.type !== "COMPANY" && (
            <Button to={`/chats/${username}`}>
              <BiSend />
              Message
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
