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
    <div className="flex  gap-2 p-2  ">
      <Link to={`/profile/${data.username}`} onClick={hideOverlay}>
        <RoundImage photoUrl={data.photoUrl} className="w-[60px]  " />
      </Link>

      <div className="flex-1 ">
        <div className="flex flex-wrap  justify-between">
          <Link
            to={`/profile/${data.username}`}
            className="mr-2"
            onClick={hideOverlay}
          >
            <span className="font-semibold hover:underline">
              {data.username}
            </span>
          </Link>
          <span className=" text-dark ">{data.date}</span>
        </div>
        <div>{data.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
