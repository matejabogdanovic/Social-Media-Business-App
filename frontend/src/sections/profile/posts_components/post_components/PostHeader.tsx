import { Link } from "react-router-dom";
import RoundImage from "../../../../common/RoundImage";
import { PostContextType, usePostContext } from "../Post";

const PostHeader = () => {
  const post: PostContextType = usePostContext();
  if (!post) return;
  return (
    <>
      <div className="flex items-start gap-2 ">
        <Link to={`/profile/${post.data.username}`}>
          <RoundImage photoUrl={post.data.photoUrl} className="w-[60px]  " />
        </Link>
        <span className="flex flex-col justify-start ">
          <Link to={`/profile/${post.data.username}`}>
            <span className="font-semibold hover:underline">
              {post.data.username}
            </span>
          </Link>
          <div className="text-dark-900 ">{post.data.date}</div>
        </span>
      </div>
    </>
  );
};

export default PostHeader;
