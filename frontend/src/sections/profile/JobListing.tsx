import Button from "../../common/Button";
import { IoLocationSharp } from "react-icons/io5";

export type JobType = {
  id: number;
  username: string;
  companyName: string;
  position: string;
  description: string;
  salary: number;
  date: string;
  location: string;
};

const JobListing = ({ job }: { job: JobType }) => {
  return (
    <div className="card card--accent !rounded-xl !mt-0 flex flex-col justify-between">
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
        <div className="mb-4 ">{job.description}</div>
      </div>
      <Button style="dark-500">Apply</Button>
    </div>
  );
};

export default JobListing;
