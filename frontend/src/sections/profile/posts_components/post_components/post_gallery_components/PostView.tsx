import { PostContextType, usePostContext } from "../../Post";
import PostHeader from "../PostHeader";
import { useState } from "react";
import LikeButton from "../LikeButton";
import ShareButton from "../ShareButton";

const PostView = ({ hideOverlay }: { hideOverlay?: Function }) => {
  const post: PostContextType = usePostContext();
  if (!post) return;
  const [actionsShown, setActionsShown] = useState<boolean>(true);

  const [startY, setStartY] = useState<number | null>(null);
  const [swiped, setSwiped] = useState<"up" | "down">("down");
  console.log("a");
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startY === null) return;

    const endY = e.changedTouches[0].clientY;
    const deltaY = endY - startY;

    if (Math.abs(deltaY) > 30) {
      setSwiped(deltaY > 0 ? "down" : "up");
    }

    setStartY(null);
  };
  return (
    <div className="my-0 mx-auto xl:w-[80%] xl:h-[80%] w-full h-full xl:rounded-xl overflow-hidden  bg-white max-h-screen ">
      <div
        className={` grid xl:grid-cols-[2fr_1fr] xl:grid-rows-[auto_1fr_1fr] grid-cols-1 grid-rows-[auto_auto_1fr]  h-full `}
      >
        <div className="order-2 xl:col-start-1 xl:row-start-1  xl:row-end-4 w-full flex justify-center items-center  relative ">
          <div
            className="bg-gray-200 w-full h-full flex justify-center items-center "
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
                className={`block xl:max-h-[500px] transition-all ${
                  swiped === "up" ? " max-h-[20vh]" : "max-h-[70vh]"
                } pointer-events-none`}
                key={index}
              />
            ))}
          </div>
          <div
            className={
              "xl:hidden absolute  right-0 bottom-1/3 transition-opacity " +
              (actionsShown ? "opacity-100" : "opacity-0")
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

        <div className=" order-1 p-4">
          <div className=" flex items-start justify-between ">
            <PostHeader />
            {hideOverlay && <button onClick={() => hideOverlay()}>X</button>}
          </div>
          <div>{post.data.description}</div>
        </div>

        <div className="order-3 xl:row-start-2 xl:row-end-4 flex flex-col justify-between ">
          <div className="  px-4 py-2 xl:flex flex-row-reverse items-start gap-2  hidden">
            <LikeButton />
            <ShareButton />
          </div>
          <div
            className={`w-full  flex-grow  flex flex-col  bg-white overflow-hidden  
             `}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="font-semibold text-center  rounded-b-xl py-1 px-2 mt-auto"
              onClick={() => {
                setSwiped((prev) => (prev === "up" ? "down" : "up"));
              }}
            >
              Comments {post.data.commentNumber}
              <div className="h-1 w-12 mx-auto rounded-full bg-black self-center"></div>
            </div>
            <div
              className={`overflow-y-scroll  xl:flex flex-col  justify-start  xl:max-h-screen xl:h-full max-h-[60vh] h-full ${
                swiped === "up" ? "flex" : "hidden"
              }`}
            >
              <div
                className="overflow-y-scroll xl:max-h-full h-full  "
                onTouchStart={(e) => {
                  e.stopPropagation();
                }}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="px-2">comment</div>

                <div className="px-2">comment</div>
                <div className="px-2">comment</div>
                <div className="px-2">comment</div>
              </div>
              <div className="w-full">
                <input
                  type="search"
                  style={{ WebkitAppearance: "none", MozAppearance: "none" }}
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  className="block w-full border-t-[1px] p-2 rounded-xl "
                  placeholder="Comment..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
