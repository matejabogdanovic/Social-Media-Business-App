import { UserPreviewType } from "../chats/chat_components/chat_messages_components/Message";
import Post, { PostData } from "./posts_components/Post";

const Posts = () => {
  const userData: UserPreviewType = {
    id: 1,
    username: "lazarn",
    photoUrl:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  const post: PostData = {
    id: 0,
    content: [
      "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description: "My lion king ahhahahah what.",
    date: "16.10.2025.",
    like_number: 12,
    comment_number: 3,
  };
  return (
    <>
      <Post userData={userData} data={post} />{" "}
      <Post userData={userData} data={post} />
    </>
  );
};

export default Posts;
