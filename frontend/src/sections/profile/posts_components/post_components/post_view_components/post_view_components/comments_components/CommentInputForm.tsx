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
      className="flex w-full p-4 border-t-2 rounded-lg"
      autoComplete="off"
    >
      <input
        type="search"
        style={{ WebkitAppearance: "none", MozAppearance: "none" }}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        className="w-full"
        placeholder="Comment..."
        onChange={(e) => setCmt(e.target.value)}
        value={cmt}
      />
      <button type="submit">
        <BiSend className="-rotate-90 text-lg fill-secondary " />
      </button>
    </form>
  );
};

export default CommentInputForm;
