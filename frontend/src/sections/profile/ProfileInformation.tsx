import { BiSend } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { useParams } from "react-router-dom";
import RoundImage from "../../common/RoundImage";
import Banner from "./profile_information_components/Banner";
import { ProfileData } from "./ProfilePage";
import Button from "../../common/Button";
import FollowButton from "./profile_information_components/profile_information_buttons/FollowButton";

const ProfileInformation = ({ data }: { data: ProfileData | undefined }) => {
  const { username } = useParams();
  return (
    <div className="relative bg-light border-[1px]   border-dark-50  xl:rounded-xl  overflow-hidden ">
      <Banner bannerUrl={data?.bannerUrl} className="w-full min-h-[200px] " />
      <RoundImage
        photoUrl={data?.photoUrl}
        className="w-[150px] absolute top-[100px] left-4 border-[8px] border-light  "
      />

      <div className="pt-[calc(50px+0.25rem)]  pb-4 px-4 flex justify-between flex-wrap gap-4">
        <div>
          <div className="font-semibold text-xl xl:text-2xl">
            {data?.fname + " " + data?.lname}
          </div>
          <div>{data?.description}</div>
          <div className="text-dark-200">{data?.location}</div>
        </div>

        <div className="flex items-end gap-2 flex-wrap ">
          <FollowButton />
          <Button to={`mailto:${data?.email}`}>
            <MdMail />
            Contact
          </Button>
          <Button to={`/chats/${username}`}>
            <BiSend />
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
