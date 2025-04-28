import { FaComment, FaThumbsUp } from "react-icons/fa6";
import Button from "../../../common/Button";
import RoundImage from "../../../common/RoundImage";
import { UserPreviewType } from "../../chats/chat_components/chat_messages_components/Message";
import { Link } from "react-router-dom";

export type PostData = {
  id: number;
  content: string[];
  description: string;
  date: string;
  like_number: number;
  comment_number: number;
};
const Post = ({
  data,
  userData,
}: {
  data: PostData;
  userData: UserPreviewType;
}) => {
  return (
    <div className="flex flex-col items-start xl:border-[1px] border-b-[1px] border-slate-300 xl:rounded-xl p-4 gap-2 my-4">
      <div className="flex items-start gap-2 ">
        <Link to={`/profile/${userData.username}`}>
          <RoundImage photoUrl={userData.photoUrl} className="w-[60px]  " />
        </Link>
        <span className="flex flex-col justify-start ">
          <Link to={`/profile/${userData.username}`}>
            <span className="font-semibold hover:underline">
              {userData.username}
            </span>
          </Link>
          <div className="text-slate-600 ">{data.date}</div>
        </span>
      </div>

      <div>{data.description}</div>
      <div className="flex justify-center w-full">
        {data.content.map((url, index) => (
          <div key={index}>
            <img src={url} className="block max-h-[500px]" />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end gap-2 flex-wrap ">
        <Button>
          <FaComment />
          {data.comment_number}
        </Button>
        <Button style="REGULAR_OUTLINE">
          <FaThumbsUp />
          {data.like_number}
        </Button>
      </div>
    </div>
  );
};

export default Post;
