import { useNavigate } from "react-router-dom";

const ChatLink = ({
  username,
  photoUrl,
  newMessage,
  selected,
}: {
  username: string;
  photoUrl: string;
  newMessage: boolean;
  selected: string;
}) => {
  const navigate = useNavigate();
  const linkContent = (
    <>
      <div className="flex gap-4">
        <div
          className="inline-block xl:w-[70px] w-[70px] border-black aspect-square rounded-full bg-center bg-contain bg-no-repeat border-[1px] "
          style={{ backgroundImage: `url(${photoUrl})` }}
        ></div>

        <span className="font-bold ">{username}</span>
      </div>
      <span
        className={
          "bg font-bold text-indigo-600 " + (newMessage ? "" : "opacity-0")
        }
      >
        o
      </span>
    </>
  );
  const linkStyle =
    "bg-slate-200 hover:bg-opacity-50 w-full  justify-between items-center gap-4 p-4 flex ";

  return (
    <>
      <button
        onClick={() => {
          navigate(`/chats/${username}`);
        }}
        className={
          linkStyle + (selected === username ? "xl:!bg-slate-300" : "")
        }
      >
        {linkContent}
      </button>

      {/* mobile
      <button
        onClick={() => {
          //setChat && setChat(<ChatPage />);

          navigate(`/chats/${username}`);
        }}
        className={linkStyle + "xl:hidden flex"}
      >
        {linkContent}
      </button> */}
    </>
  );
};

export default ChatLink;
