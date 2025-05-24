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
          "from-dark-500 to-dark-500 bg-gradient-to-tr rounded-full p-1 " +
          (newMessage ? "" : "opacity-0")
        }
      ></span>
    </>
  );
  const linkStyle =
    "bg-transparent  hover:bg-secondary-100 w-full  justify-between items-center gap-4 p-4 flex active:!scale-100 ";

  return (
    <>
      <button
        onClick={() => {
          navigate(`/chats/${username}`);
        }}
        className={
          linkStyle + (selected === username ? "!bg-secondary-100" : "")
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
