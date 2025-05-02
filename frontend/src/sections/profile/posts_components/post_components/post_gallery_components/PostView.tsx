import { PostContextType, usePostContext } from "../../Post";
import PostHeader from "../PostHeader";
import { useState } from "react";
import LikeButton from "../LikeButton";
import ShareButton from "../ShareButton";
import Comments from "./post_view_components/Comments";
import PostDescription from "../PostDescription";

const PostView = ({ hideOverlay }: { hideOverlay?: Function }) => {
  const post: PostContextType = usePostContext();
  if (!post) return;
  const [actionsShown, setActionsShown] = useState<boolean>(true);
  const [swiped, setSwiped] = useState<"up" | "down">("down");
  return (
    <div
      className={`my-0 mx-auto xl:w-[80%] xl:h-[80vh] w-full xl:rounded-xl bg-white   h-[100dvh] overflow-hidden xl:static ${
        swiped === "up" ? "fixed top-0" : ""
      }`}
    >
      <div
        className={` grid xl:grid-cols-[2fr_1fr] xl:grid-rows-[auto_1fr_1fr] grid-cols-1 grid-rows-[auto_auto_1fr]  h-full xl:overflow-y-auto overflow-y-scroll  `}
      >
        {/* gallery */}
        <div
          className={`order-2 xl:col-start-1 xl:row-start-1  xl:row-end-4 w-full flex justify-center items-center  relative    `}
        >
          {/* photos */}
          <div
            className="bg-gray-200 w-full h-full flex justify-center items-center  "
            onTouchStart={() => {
              setActionsShown(false);
            }}
            onTouchEnd={() => {
              setActionsShown(true);
            }}
          >
            {post.data.content.map((url, index) => (
              <img
                src={url}
                className={`block  transition-all duration-400 xl:max-h-full ${
                  swiped === "up" ? " max-h-[10vh]" : "max-h-[100vh]"
                } pointer-events-none`}
                key={index}
              />
            ))}
          </div>
          {/* buttons mobile */}
          <div
            className={
              `xl:hidden absolute  right-0 bottom-1/3 transition-opacity  ${
                swiped === "up" ? " hidden" : ""
              }  ` + (actionsShown ? "opacity-100" : "opacity-0")
            }
          >
            <div className="bg-white rounded-l-full [&>*]:w-full">
              <LikeButton />
            </div>
            <div className="bg-white rounded-l-full  mt-2 [&>*]:w-full">
              <ShareButton />
            </div>
          </div>
        </div>

        {/* header and description */}
        <div
          className={` xl:max-h-full xl:p-4 ${
            swiped === "up" ? " max-h-0 p-0 " : "p-4"
          } xl:block  order-1  `}
        >
          <div className=" flex items-start justify-between ">
            <PostHeader />
            {hideOverlay && <button onClick={() => hideOverlay()}>X</button>}
          </div>
          <PostDescription />
        </div>

        {/* buttons */}
        <div
          className={`order-3 xl:row-start-2 xl:row-end-4 flex flex-col overflow-hidden  `}
        >
          {/* buttons xl */}
          <div
            className={`  px-4 py-2 xl:flex flex-row-reverse items-start gap-2  hidden  ${
              !actionsShown && swiped !== "up"
                ? "[&+*]:opacity-0"
                : "[&+*]:opacity-100"
            }`}
          >
            <LikeButton />
            <ShareButton />
          </div>
          <Comments setSwiped={setSwiped} swiped={swiped} />
        </div>
      </div>
    </div>
  );
};

export default PostView;
