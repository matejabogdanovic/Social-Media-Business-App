import WorkListing, { WorkType } from "./WorkListing";

const WorkHistory = () => {
  const works: WorkType[] = [
    {
      from: "2023",
      to: "",
      companyUsername: "comp2",
      position: "System Administrator Engineer",
    },
    {
      from: "2022",
      to: "2023",
      companyUsername: "facebook",
      position: "Software Engineer",
    },
    {
      from: "2010",
      to: "2022",
      companyUsername: "farmbg",
      position: "Farmer",
    },
  ];
  return (
    <div className="relative bg-light border-[1px]   border-dark-50  xl:rounded-xl  overflow-hidden p-4 mt-2 ">
      <div className="flex flex-col gap-4 ">
        {works.map((e, i) => (
          <WorkListing work={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
