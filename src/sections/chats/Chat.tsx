import { useParams } from "react-router-dom";
import ChatMessages from "./chat_components/ChatMessages";
import ChatHeader from "./chat_components/ChatHeader";
import ChatInputForm from "./chat_components/ChatInputForm";
import MessageContextProvider from "./chat_components/MessageContextProvider";

const Chat = () => {
  const { username } = useParams();

  return (
    <div className="w-full h-full relative flex flex-col">
      {username && (
        <>
          <ChatHeader />
          <MessageContextProvider>
            <ChatMessages />
            <ChatInputForm />
          </MessageContextProvider>
        </>
      )}
    </div>
  );
};

export default Chat;
