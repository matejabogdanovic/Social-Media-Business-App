import { useState } from "react";
import Loader from "../../common/loader/Loader";
import { All } from "../../roles/All";
import { useOutletContext } from "react-router-dom";
import Post, { PostData } from "../profile/posts_components/Post";

const Recommended = () => {
  const [recommendedPostIds, setRecommendedPostIds] = useState<number[]>();
  const { user }: { user: All } = useOutletContext();
  return (
    <div>
      <Loader
        loaderFunction={() =>
          user
            .fetchRecommendedPosts()
            .then((d) => setRecommendedPostIds(d ?? []))
        }
      >
        {recommendedPostIds?.map((id, index) => (
          <RecommendedPost user={user} id={id} key={index} />
        ))}
      </Loader>
    </div>
  );
};

const RecommendedPost = ({ id, user }: { id: number; user: All }) => {
  const [postData, setPostData] = useState<PostData>();

  return (
    <Loader
      loaderFunction={() =>
        user.fetchPost(id).then((d) => {
          setPostData(d ?? undefined);

          return d;
        })
      }
    >
      {postData && <Post data={postData} />}
    </Loader>
  );
};
export default Recommended;
