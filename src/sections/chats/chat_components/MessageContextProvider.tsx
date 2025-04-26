import { createContext, useContext, useState } from "react";
import { MessageType } from "./chat_messages_components/Message";

const MessageContext = createContext<
  [
    MessageType | undefined,
    React.Dispatch<React.SetStateAction<MessageType | undefined>>
  ]
>([undefined, () => {}]);

export const useMessage = () => useContext(MessageContext);

const MessageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [message, setMessage] = useState<MessageType>();

  return (
    <MessageContext.Provider value={[message, setMessage]}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
