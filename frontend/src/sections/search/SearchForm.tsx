import { createContext, useContext, useState } from "react";
import ToggleUserOrJobButton from "./ToggleUserOrJobButton";
import SearchButton from "./SearchButton";
import { JobType } from "../job/JobListing";
import { useOutletContext } from "react-router-dom";
import { All } from "../../roles/All";
import { SearchProfileData } from "./Search";

export type SearchFormContextType = {
  jobs: JobType[];
  users: SearchProfileData[];
  setJobs: React.Dispatch<React.SetStateAction<JobType[]>>;
  setUsers: React.Dispatch<React.SetStateAction<SearchProfileData[]>>;
  toggle: "user" | "job";
  setToggle: React.Dispatch<React.SetStateAction<"user" | "job">>;
} | null;
export const SearchFormContext = createContext<SearchFormContextType>(null);

export const useSearchFormContext = () => useContext(SearchFormContext);

const SearchForm = () => {
  const { user }: { user: All } = useOutletContext();

  const [query, setQuery] = useState<string>("");
  const context: SearchFormContextType = useSearchFormContext();
  if (!context) return;
  const { jobs, setJobs, users, setUsers, toggle, setToggle } = context;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (toggle === "user") {
          user.searchProfiles(query).then((data) => {
            if (data) setUsers(data);

            console.log(data);
          });
        } else {
          user.searchJobs(query).then((data) => {
            if (data) setJobs(data);

            console.log(data);
          });
        }
      }}
      className={` flex w-full !py-2 !px-4 card 
        ${
          toggle === "user" ? "" : "card--accent"
        }  rounded-lg transition-colors`}
      autoComplete="off"
    >
      <ToggleUserOrJobButton
        onClick={() => {
          setToggle((prev) => (prev === "user" ? "job" : "user"));
          setJobs([]);
          setUsers([]);
        }}
        toggle={toggle}
      />
      <input
        type="search"
        style={{ WebkitAppearance: "none", MozAppearance: "none" }}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        className="w-full bg-transparent mx-2"
        placeholder={toggle === "user" ? "Users..." : "Jobs..."}
        onChange={(e) => setQuery(e.target.value.trim())}
        value={query}
      />
      <SearchButton toggle={toggle} />
    </form>
  );
};

export default SearchForm;
