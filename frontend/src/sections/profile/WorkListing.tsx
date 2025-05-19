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
    <div className="flex items-stretch gap-2 min-h-[3lh] w-full ">
      <div className=" flex flex-col justify-between items-center text-dark-900">
        <div>
          {work.to === "" ? (
            <BsCircleFill className="translate-y-1 fill-dark-900" />
          ) : (
            work.to
          )}
        </div>
        <div className="w-1 h-full bg-dark-900 rounded-full"></div>
        <div>{work.from}</div>
      </div>

      <div
        className={`flex flex-col justify-center w-full ${
          work.to === "" ? "xl:text-xl text-lg" : ""
        }`}
      >
        <div className="text-primary font-semibold">
          <Link to={`/profile/${work.companyUsername}`}>
            {work.companyName}
          </Link>
        </div>
        <hr className="border-dark-200" />
        <div>{work.position}</div>
      </div>
    </div>
  );
};

export default WorkListing;
