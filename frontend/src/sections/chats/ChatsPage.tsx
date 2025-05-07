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
      <Container className="border-[1px]    border-dark-50  rounded-md  xl:flex hidden h-full  bg-light overflow-hidden  ">
        <ChatLinks />
        <div className="flex  border-l-[1px]   border-dark-50   w-2/3 ">
          {<Chat />}
        </div>
      </Container>
      {/* mobile */}
      <Container className=" xl:hidden flex h-full bg-light ">
        {username ? <div className="w-full ">{<Chat />}</div> : <ChatLinks />}
      </Container>
    </>
  );
};

export default ChatsPage;
