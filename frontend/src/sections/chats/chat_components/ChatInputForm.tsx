import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { useMessage } from "./MessageContextProvider";

const ChatInputForm = () => {
  const [msg, setMsg] = useState<string>("");
  const [message, setMessage] = useMessage();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (msg.trim() === "") return;
        setMessage({
          from: 0,
          to: 1,
          content: msg,
          date: "16.10.2026",
        });

        setMsg("");
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
        placeholder="Send message..."
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
      />
      <button type="submit" className="bg-primary rounded-full p-2">
        <BiSend className="-rotate-90 text-base fill-light " />
      </button>
    </form>
  );
};

export default ChatInputForm;
