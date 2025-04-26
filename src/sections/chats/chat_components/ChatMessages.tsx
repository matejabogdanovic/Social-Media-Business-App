import { useEffect, useRef, useState } from "react";
import Message, {
  MessageType,
  SenderDataType,
} from "./chat_messages_components/Message";
import { useOutletContext, useParams } from "react-router-dom";
import { All } from "../../../roles/All";
import LoadMoreButton from "./chat_messages_components/LoadMoreButton";

const ChatMessages = () => {
  const { user }: { user: All } = useOutletContext();
  const { username } = useParams();
  const myData: SenderDataType = {
    id: 0,
    username: "mateja",
    photoUrl:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  const [data, setData] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadedAll, setLoadedAll] = useState<boolean>(false);

  useEffect(() => {
    setData(user.fetchMessages(1, 0, 5));

    setLoading(false);
  }, [username, user]);

  const fetchMoreMessages = () => {
    setLoading(true);
    setData((prev) => [...prev, ...user.fetchMessages(1, prev.length, 5)]);
    setLoading(false);
  };
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="flex-1 flex flex-col-reverse  px-2 overflow-y-scroll "
      ref={scrollContainerRef}
    >
      <>
        {data.map((d, i) => (
          <Message
            date={d.date}
            content={d.content ? d.content : ""}
            sentByMe={d.from === myData.id}
            key={i}
          />
        ))}
        <LoadMoreButton
          loading={loading}
          loadMoreData={() => {
            setLoading(true);
            setTimeout(() => {
              fetchMoreMessages();
              setLoading(false);
            }, 500);
          }}
        />
      </>
    </div>
  );
};

export default ChatMessages;
