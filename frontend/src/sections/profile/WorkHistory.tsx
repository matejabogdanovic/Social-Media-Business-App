import { useState } from "react";
import WorkListing, { WorkType } from "./WorkListing";
import Loader from "../../common/loader/Loader";
import { All } from "../../roles/All";
import { useOutletContext, useParams } from "react-router-dom";

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
        <div className="relative bg-light border-[1px]   border-dark-50  xl:rounded-xl  overflow-hidden p-4 mt-2 ">
          <div className="flex flex-col gap-4 ">
            {works.map((e, i) => (
              <WorkListing work={e} key={i} />
            ))}
          </div>
        </div>
      )}
    </Loader>
  );
};

export default WorkHistory;
