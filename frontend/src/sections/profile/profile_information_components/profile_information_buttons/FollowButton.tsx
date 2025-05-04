import { MdPersonAdd, MdPersonAddDisabled } from "react-icons/md";
import Button from "../../../../common/Button";

const FollowButton = () => {
  // const post: PostContextType = usePostContext();
  // if (!post) return null;
  return (
    <Button
      style={false ? "REGULAR" : "REGULAR_OUTLINE"}
      onClick={() => {
        // const newPostData = {
        //   ...post.data,
        //   likeNumber: post.data.likeNumber + (post.data.isLiked ? -1 : 1),
        //   isLiked: !post.data.isLiked,
        // };
        // post.setPostData(newPostData);
        // todo send notification that it's followed/unfollowed
      }}
    >
      {false ? (
        <>
          <MdPersonAddDisabled /> Unfollow
        </>
      ) : (
        <>
          <MdPersonAdd />
          Follow
        </>
      )}
    </Button>
  );
};

export default FollowButton;
