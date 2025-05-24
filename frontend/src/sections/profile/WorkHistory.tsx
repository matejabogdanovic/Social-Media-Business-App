import { useState } from "react";
import WorkListing, { WorkType } from "./WorkListing";
import Loader from "../../common/loader/Loader";
import { All } from "../../roles/All";
import { useOutletContext, useParams } from "react-router-dom";
import Listings from "../../common/Listings";

const WorkHistory = () => {
  const [works, setWorks] = useState<WorkType[]>();
  const { user }: { user: All } = useOutletContext();
  const { username } = useParams();
  return (
    <Loader
      loaderFunction={() =>
        user.fetchWork(username ?? "").then((d) => {
          console.log(d);
          setWorks(d ?? undefined);
          return d;
        })
      }
      loadingDependencyList={[user, username]}
    >
      {works && (
        <div className="card  mt-2">
          <h1 className="">Work History</h1>
          <Listings
            minListingsToShow={3}
            numOfCols={1}
            showCnt={1}
            data={works}
            noDataText={""}
            mapFunction={(e, i) => <WorkListing work={e} key={i} />}
          />
        </div>
      )}
    </Loader>
  );
};

export default WorkHistory;
