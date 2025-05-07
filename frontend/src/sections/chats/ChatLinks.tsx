import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatLink from "./chat_links_components/ChatLink";

const ChatLinks = () => {
  const { username } = useParams();
  const [selected, setSelected] = useState<string>("");
  useEffect(() => {
    if (username) setSelected(username);
  }, [username]);
  return (
    <div className="w-full xl:w-1/3 bg-transparent">
      <ChatLink
        username="mateja"
        photoUrl="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        newMessage={false}
        selected={selected}
      />
      <ChatLink
        username="lazarn"
        photoUrl="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        newMessage={true}
        selected={selected}
      />
    </div>
  );
};

export default ChatLinks;
