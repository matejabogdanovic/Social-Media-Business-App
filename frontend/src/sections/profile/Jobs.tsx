import { useOutletContext, useParams } from "react-router-dom";
import Loader from "../../common/loader/Loader";
import JobListing, { JobType } from "./JobListing";
import { useState } from "react";
import { All } from "../../roles/All";
import Listings from "../../common/Listings";

const Jobs = () => {
  const { username } = useParams();
  const { user }: { user: All } = useOutletContext();
  const [data, setData] = useState<JobType[]>();

  return (
    <Loader
      loaderFunction={() =>
        user.fetchJobs(username ?? "").then((d) => {
          setData(d ?? undefined);
          return d;
        })
      }
      loadingDependencyList={[username, user]}
      errorCondition={!data}
    >
      <div className="mt-2">
        <Listings
          minListingsToShow={3}
          data={data}
          noDataText={""}
          mapFunction={(job, i) => <JobListing job={job} key={i} />}
        />
      </div>
    </Loader>
  );
};

export default Jobs;
