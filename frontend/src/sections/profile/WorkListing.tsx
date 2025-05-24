import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export type WorkType = {
  from: string;
  to: string;
  companyUsername: string;
  companyName: string;
  position: string;
};
const WorkListing = ({ work }: { work: WorkType }) => {
  // fetch company name

  return (
    <div className="card card--accent flex items-stretch gap-2 min-h-[3lh] w-full ">
      <div className=" flex flex-col justify-between items-center text-dark-900">
        <div>
          {work.to === "" ? (
            <BsCircleFill className="translate-y-1 fill-dark-900" />
          ) : (
            work.to
          )}
        </div>
        <div className="w-1 h-full min-h-[1lh] bg-dark-900 rounded-full"></div>
        <div>{work.from}</div>
      </div>

      <Link
        to={`/profile/${work.companyUsername}`}
        className={`flex flex-col justify-center w-full 
          
        `}
      >
        <div className="font-semibold text-dark-500 xl:text-xl text-lg ">
          {work.position}
        </div>

        <hr className="border-dark-200 text-lg" />
        <div>{work.companyName}</div>
      </Link>
    </div>
  );
};

export default WorkListing;
