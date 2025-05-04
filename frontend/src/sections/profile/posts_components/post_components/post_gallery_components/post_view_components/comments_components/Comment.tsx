import { Link } from "react-router-dom";
import RoundImage from "../../../../../../../common/RoundImage";

export type CommentType = {
  id: number;

  username: string;
  photoUrl: string;

  date: string;
  comment: string;
};
const Comment = ({
  data,
  hideOverlay,
}: {
  data: CommentType;
  hideOverlay?: () => void;
}) => {
  return (
    <div className="flex items-start gap-2 p-2">
      <Link to={`/profile/${data.username}`} onClick={hideOverlay}>
        <RoundImage photoUrl={data.photoUrl} className="w-[60px]  " />
      </Link>
      <span className="flex flex-col justify-start ">
        <Link to={`/profile/${data.username}`} onClick={hideOverlay}>
          <span className="font-semibold hover:underline">{data.username}</span>
        </Link>
        <span className="text-slate-600 ">{data.date}</span>
        <div>{data.comment}</div>
      </span>
    </div>
  );
};

export default Comment;
