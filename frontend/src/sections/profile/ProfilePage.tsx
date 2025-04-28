import { Link, useOutletContext, useParams } from "react-router-dom";
import Container from "../../common/Container";
import RoundImage from "../../common/RoundImage";
import { useEffect, useState } from "react";
import { All } from "../../roles/All";
import Banner from "./profile_information_components/Banner";
import { BiSend } from "react-icons/bi";
import { MdEmail, MdMail } from "react-icons/md";
import ProfileInformation from "./ProfileInformation";
import Posts from "./Posts";

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
    <Container>
      <ProfileInformation data={data} />
      <Posts />
    </Container>
  );
};

export default ProfilePage;
