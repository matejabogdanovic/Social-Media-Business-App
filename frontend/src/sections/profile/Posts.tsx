import { useState } from "react";

import Post, { PostData } from "./posts_components/Post";
import Loader from "../../common/loader/Loader";
import { useOutletContext, useParams } from "react-router-dom";
import { All } from "../../roles/All";

const Posts = () => {
  const { user }: { user: All } = useOutletContext();
  const { username } = useParams();
  const [posts, setPosts] = useState<PostData[]>();

  return (
    <Loader
      loaderFunction={() =>
        user.fetchPosts(username ?? "").then((d) => {
          setPosts(d ?? undefined);
          return d;
        })
      }
      loadingDependencyList={[user, username]}
      errorCondition={!posts}
    >
      {posts?.map((data) => (
        <Post data={data} key={data.id} />
      ))}
    </Loader>
  );
};

export default Posts;
