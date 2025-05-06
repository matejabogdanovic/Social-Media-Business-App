import { useNavigate } from "react-router-dom";
import RoundImage from "../../../common/RoundImage";

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
        <RoundImage photoUrl={photoUrl} className="w-[70px]" />

        <span className="font-bold ">{username}</span>
      </div>
      <span
        className={
          "bg font-bold text-accent " + (newMessage ? "" : "opacity-0")
        }
      >
        o
      </span>
    </>
  );
  const linkStyle =
    "bg-secondary-100 bg-opacity-20 hover:bg-opacity-50 w-full  justify-between items-center gap-4 p-4 flex ";

  return (
    <>
      <button
        onClick={() => {
          navigate(`/chats/${username}`);
        }}
        className={
          linkStyle + (selected === username ? "xl:!bg-opacity-30" : "")
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
