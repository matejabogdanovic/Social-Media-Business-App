import { useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import Loader from "../../common/loader/Loader";
import { All } from "../../roles/All";
import JobListing, { JobType } from "./JobListing";
import Container from "../../common/Container";
import ProfilePreview from "../../common/ProfilePreview";
import TextLimiter from "../../common/TextLimiter";

const JobPage = () => {
  const { id } = useParams();
  const { user }: { user: All } = useOutletContext();
  const [data, setData] = useState<JobType>();
  return (
    <Loader
      loaderFunction={() =>
        user.fetchJob(id ?? "").then((d) => {
          setData(d ?? undefined);

          return d;
        })
      }
      loadingDependencyList={[id, user]}
      errorCondition={!data}
    >
      {data && (
        <Container className="flex xl:flex-row flex-col-reverse gap-4 [&>:first-child]:xl:w-2/3 [&>:last-child]:xl:w-1/3 xl:items-start ">
          <JobListing job={data} textLimiterActive={false} />
          <div className="flex flex-col gap-2">
            <ProfilePreview
              data={{
                id: 0,
                username: data.username,
                fname: "",
                lname: "",
                companyName: data.companyName,
                photoUrl: data.photoUrl,
                type: "COMPANY",
              }}
            />
            <div className="card">
              <h1>About Us</h1>
              <div>
                <TextLimiter text={data.aboutUs} limit={100} />
              </div>
            </div>
          </div>
        </Container>
      )}
    </Loader>
  );
};

export default JobPage;
