import { useOutletContext, useParams } from "react-router-dom";
import Container from "../../common/Container";
import { useEffect, useState } from "react";
import { All } from "../../roles/All";
import ProfileInformation from "./ProfileInformation";
import Posts from "./Posts";
import WorkHistory from "./WorkHistory";

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
      <WorkHistory />
      <Posts />
    </Container>
  );
};

export default ProfilePage;
