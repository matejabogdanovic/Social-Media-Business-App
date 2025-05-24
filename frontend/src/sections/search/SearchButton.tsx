import { BiSearch } from "react-icons/bi";

const SearchButton = ({ toggle }: { toggle: "user" | "job" }) => {
  return (
    <button
      type="submit"
      className={`${
        toggle === "user" ? "bg-dark-500" : "bg-dark-500"
      } rounded-full p-2 text-base text-light transition-colors`}
    >
      <BiSearch />
    </button>
  );
};

export default SearchButton;
