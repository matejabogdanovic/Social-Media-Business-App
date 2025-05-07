import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { useComment } from "./CommentContextProvider";

const CommentInputForm = () => {
  const [cmt, setCmt] = useState<string>("");
  const [comment, setComment] = useComment();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (cmt.trim() === "") return;
        setComment({
          id: 3,
          username: "milica",
          photoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
          date: "2025-05-04T11:57:00Z",
          comment: cmt,
        });

        setCmt("");
      }}
      className="flex w-full py-2 px-4 border-t-[1px]   border-dark-50  rounded-lg"
      autoComplete="off"
    >
      <input
        type="search"
        style={{ WebkitAppearance: "none", MozAppearance: "none" }}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        className="w-full bg-transparent"
        placeholder="Comment..."
        onChange={(e) => setCmt(e.target.value)}
        value={cmt}
      />
      <button type="submit" className="bg-primary rounded-full p-2">
        <BiSend className="-rotate-90 text-base fill-light " />
      </button>
    </form>
  );
};

export default CommentInputForm;
