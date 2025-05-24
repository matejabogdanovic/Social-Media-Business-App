import Button from "../../common/Button";
import { IoLocationSharp } from "react-icons/io5";
import TextLimiter from "../../common/TextLimiter";
import { useNavigate } from "react-router-dom";
import ShareButton from "../../common/ShareButton";

export type JobType = {
  id: number;
  username: string;
  companyName: string;
  photoUrl: string;
  aboutUs: string;
  position: string;
  description: string;
  salary: number;
  date: string;
  location: string;
};

const JobListing = ({
  job,
  textLimiterActive = true,
  actionsVisible = true,
}: {
  job: JobType;
  textLimiterActive?: boolean;
  actionsVisible?: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <div className="card card--accent flex flex-col justify-between ">
      <div>
        <div className=" mb-2 flex items-end justify-between flex-wrap ">
          <div className="xl:text-xl text-lg font-semibold text-dark-500">
            {job.position}
          </div>
          <div className="text-dark-300 ">{job.date}</div>
        </div>
        <div className="text-dark-500 font-medium mb-2">
          <div>
            <IoLocationSharp className=" inline-block  mb-1 -ml-[3px]" />
            {job.location}
          </div>

          <div>
            <span className="mr-1 font-bold">$</span>
            {job.salary}
          </div>
        </div>
        <div className=" ">
          {textLimiterActive ? (
            <TextLimiter
              text={job.description}
              limit={100}
              onSeeMore={() => navigate(`/jobs/${job.id}`)}
            />
          ) : (
            job.description
          )}
        </div>
      </div>
      {actionsVisible && (
        <div className="flex justify-between [&>:first-child]:flex-1 gap-2 mt-4">
          <Button style="dark-500">Apply</Button>
          <ShareButton path={`${window.location.origin}/jobs/${job.id}`} />
        </div>
      )}
    </div>
  );
};

export default JobListing;
