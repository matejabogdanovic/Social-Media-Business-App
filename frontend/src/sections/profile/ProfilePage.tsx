import { useOutletContext, useParams } from "react-router-dom";
import Container from "../../common/Container";
import { useEffect, useState } from "react";
import { All } from "../../roles/All";
import ProfileInformation from "./ProfileInformation";
import Posts from "./Posts";
import WorkHistory from "./WorkHistory";
import Loader from "../../common/loader/Loader";
import Jobs from "./Jobs";

export type ProfileData = {
  id: number;
  fname: string;
  lname: string;
  companyName: string; // only for company profiles
  email: string;
  description: string; // regular description | role | education
  location: string;
  photoUrl: string;
  bannerUrl: string;
  type: "REGULAR" | "COMPANY";
};

const ProfilePage = () => {
  const { username } = useParams();
  const { user }: { user: All } = useOutletContext();
  const [data, setData] = useState<ProfileData>();

  return (
    <Loader
      loaderFunction={() =>
        user.fetchProfileData(username ?? "").then((d) => {
          setData(d ?? undefined);
          return d;
        })
      }
      loadingDependencyList={[username, user]}
      errorCondition={!data}
    >
      <Container>
        <ProfileInformation data={data} />
        <Jobs />
        <WorkHistory />
        <Posts />
      </Container>
    </Loader>
  );
};

export default ProfilePage;
