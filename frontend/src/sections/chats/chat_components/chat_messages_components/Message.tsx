export type MessageContent = string;
export type MessageType = {
  from: number;
  to: number;
  content: MessageContent;
  date: string;
};
export type UserPreviewType = {
  id: number;
  username: string;
  photoUrl: string;
};
const Message = ({
  sentByMe,
  date,
  content,
  ref,
}: {
  ref?: React.Ref<HTMLDivElement> | undefined;
  sentByMe: boolean;
  date: string;
  content: MessageContent;
}) => {
  return content ? (
    <div ref={ref}>
      <div
        className={
          "px-4 py-2 rounded-3xl mt-1 max-w-[75%] min-w-min  " +
          (sentByMe
            ? "bg-slate-400 place-self-end"
            : "bg-gray-300  place-self-start ")
        }
      >
        {content}
      </div>
      <div className={sentByMe ? "text-right" : "text-left"}>{date}</div>
    </div>
  ) : (
    <></>
  );
};

export default Message;
