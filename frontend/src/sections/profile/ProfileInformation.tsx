import { BiSend } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { useParams } from "react-router-dom";
import Banner from "./profile_information_components/Banner";
import { ProfileData } from "./ProfilePage";
import Button from "../../common/Button";
import FollowButton from "./profile_information_components/profile_information_buttons/FollowButton";

const ProfileInformation = ({ data }: { data: ProfileData | undefined }) => {
  const { username } = useParams();
  return (
    <div className="card !m-0 !p-0 overflow-hidden relative">
      <Banner data={data} className="w-full min-h-[200px] " />

      <div className=" p-4 flex justify-between flex-wrap gap-4">
        <div className="flex justify-center xl:justify-start  gap-x-4 gap-y-2 flex-wrap text-center  font-semibold ">
          <div>
            Followers <div>{data?.followers}</div>
          </div>
          <div>
            Following <div>{data?.following}</div>
          </div>
        </div>
        <div className="flex items-end gap-2 flex-wrap  ">
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
