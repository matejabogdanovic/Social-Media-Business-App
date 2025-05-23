import { useState } from "react";
import JobListing, { JobType } from "../profile/JobListing";

import SearchForm, { SearchFormContext } from "./SearchForm";
import Listings from "../../common/Listings";
import ProfilePreview from "../../common/ProfilePreview";

export type SearchProfileData = {
  id: number;
  username: string;
  fname: string;
  lname: string;
  companyName: string; // only for company profiles
  photoUrl: string;
  type: "REGULAR" | "COMPANY";
};
const Search = () => {
  const [toggle, setToggle] = useState<"user" | "job">("user");
  const [users, setUsers] = useState<SearchProfileData[]>([]);
  const [jobs, setJobs] = useState<JobType[]>([]);
  return (
    <div className="card">
      <h1 className="text-2xl font-bold my-2">Search Users or Jobs</h1>
      <SearchFormContext.Provider
        value={{ toggle, setToggle, users, setUsers, jobs, setJobs }}
      >
        <SearchForm />
      </SearchFormContext.Provider>
      <div className="mt-4">
        <Listings
          minListingsToShow={3}
          data={toggle === "user" ? users : jobs}
          noDataText={""}
          mapFunction={(data, i) =>
            toggle === "user" ? (
              <ProfilePreview data={data} key={i} />
            ) : (
              <JobListing job={data} key={i} />
            )
          }
        />
      </div>
    </div>
  );
};

export default Search;
