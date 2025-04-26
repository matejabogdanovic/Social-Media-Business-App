import { useParams } from "react-router-dom";
import Container from "../../common/Container";
import Chat from "./Chat";
import ChatLinks from "./ChatLinks";

const ChatsPage = () => {
  const { username } = useParams();
  console.log(username);
  return (
    <>
      {/* pc */}
      <Container className=" border-2 xl:flex hidden h-full  ">
        <ChatLinks />
        <div className="flex border-2 w-2/3 ">{<Chat />}</div>
      </Container>
      {/* mobile */}
      <Container className=" xl:hidden flex h-full  ">
        {username ? <div className="w-full ">{<Chat />}</div> : <ChatLinks />}
      </Container>
    </>
  );
};

export default ChatsPage;
