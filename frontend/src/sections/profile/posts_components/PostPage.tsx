import { useState } from "react";
import { PostContext, PostData } from "./Post";
import PostGalleryOverlay from "./post_components/post_gallery_components/PostView";

const PostPage = () => {
  const [postData, setPostData] = useState<PostData>({
    id: 0,
    content: [
      "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description: "My lion king ahhahahah what.",
    date: "16.10.2025.",
    likeNumber: 12,
    commentNumber: 3,
    isLiked: false,
    username: "lazarn",
    photoUrl:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  return (
    <PostContext.Provider value={{ data: postData, setPostData: setPostData }}>
      <div className=" flex justify-center items-center h-full [&>*]:xl:border-[1px]">
        <PostGalleryOverlay />{" "}
      </div>
    </PostContext.Provider>
  );
};

export default PostPage;
