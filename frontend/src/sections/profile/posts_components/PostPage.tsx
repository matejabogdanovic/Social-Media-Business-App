import { useState } from "react";
import { PostContext, PostData } from "./Post";
import PostView from "./post_components/PostView";
import Loader from "../../../common/loader/Loader";
import { All } from "../../../roles/All";
import { useOutletContext, useParams } from "react-router-dom";

const PostPage = () => {
  const [postData, setPostData] = useState<PostData | undefined>();
  const { user }: { user: All } = useOutletContext();
  const { id } = useParams();
  return (
    <Loader
      loaderFunction={() =>
        user.fetchPost(id ?? "").then((d) => {
          setPostData(d ?? undefined);
          return d;
        })
      }
    >
      {postData && setPostData && (
        <PostContext.Provider
          value={{ data: postData, setPostData: setPostData }}
        >
          <div className=" xl:flex justify-center items-center h-full  [&>*]:xl:border-[1px] [&>*]:xl:  border-dark-50  overflow-y-hidden">
            <PostView />
          </div>
        </PostContext.Provider>
      )}
    </Loader>
  );
};

export default PostPage;
