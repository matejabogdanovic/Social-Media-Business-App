import { Link, useOutletContext, useParams } from "react-router-dom";
import Container from "../../common/Container";
import RoundImage from "../../common/RoundImage";
import { useEffect, useState } from "react";
import { All } from "../../roles/All";
import Banner from "./profile_information/Banner";
import { BiSend } from "react-icons/bi";
import { MdEmail, MdMail } from "react-icons/md";

export type ProfileData = {
  id: number;
  fname: string;
  lname: string;
  email: string;
  description: string; // regular description | role | education
  location: string;
  photoUrl: string;
  bannerUrl: string;
};

const ProfilePage = () => {
  const { username } = useParams();
  const { user }: { user: All } = useOutletContext();
  const [data, setData] = useState<ProfileData>();
  useEffect(() => {
    setData(user.fetchProfileData());
  }, [username, user]);
  return (
    <Container className="relative border-2 border-slate-300 rounded-xl overflow-hidden ">
      <Banner bannerUrl={data?.bannerUrl} className="w-full min-h-[200px] " />
      <RoundImage
        photoUrl={data?.photoUrl}
        className="w-[150px] absolute top-[100px] left-4 border-[8px] border-white  "
      />

      <div className="pt-[calc(50px+0.25rem)]  pb-4 px-4 flex justify-between flex-wrap gap-4">
        <div>
          <div className="font-semibold text-xl xl:text-2xl">
            {data?.fname + " " + data?.lname}
          </div>
          <div>{data?.description}</div>
          <div className="text-slate-600">{data?.location}</div>
        </div>
        <div className="flex items-end gap-2 flex-wrap ">
          <a
            href={`mailto:${data?.email}`}
            className="flex  justify-center items-center gap-2 rounded-full bg-sky-500 text-slate-50 px-6 py-4 border-2 border-transparent"
          >
            <MdMail />
            Contact
          </a>

          <Link
            to={`/chats/${username}`}
            className="flex justify-center items-center gap-2 rounded-full border-sky-500 border-2 text-sky-500 px-6 py-4 "
          >
            <BiSend />
            Message
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ProfilePage;
