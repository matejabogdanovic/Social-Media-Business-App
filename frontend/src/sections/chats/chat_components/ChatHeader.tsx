import BackButton from "../../../common/BackButton";
import RoundImage from "../../../common/RoundImage";
import { useParams } from "react-router-dom";
import { SenderDataType } from "./chat_messages_components/Message";

const ChatHeader = () => {
  const senderData: SenderDataType = {
    id: 1,
    username: "lazarn",
    photoUrl:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  const { username } = useParams();
  return (
    <div className=" flex justify-center items-center bg-slate-300  [&>:first-child]:xl:hidden sticky top-0 ">
      <BackButton location="/chats" className="absolute left-0" />
      <div className="font-bold p-4 flex items-center gap-2">
        <RoundImage photoUrl={senderData.photoUrl} className="w-[40px]" />
        <div>{username}</div>
      </div>
    </div>
  );
};

export default ChatHeader;
