import { MdPersonAdd, MdPersonAddDisabled } from "react-icons/md";
import Button from "../../../../common/Button";

import { ProfileData } from "../../ProfilePage";

const FollowButton = ({
  data,
  setData,
}: {
  data: ProfileData;
  setData: React.Dispatch<React.SetStateAction<ProfileData | undefined>>;
}) => {
  return (
    <Button
      style={data.isFollowing ? "REGULAR" : "REGULAR_OUTLINE"}
      onClick={() => {
        const newData: ProfileData = {
          ...data,
          followers: data.followers + (data.isFollowing ? -1 : 1),
          isFollowing: !data.isFollowing,
        };
        setData(newData);
        // todo post request that I'm following one more person and that person is followed
      }}
    >
      {data.isFollowing ? (
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
