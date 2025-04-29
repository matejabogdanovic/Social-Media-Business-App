import { FaThumbsUp } from "react-icons/fa6";
import Button from "../../../../../common/Button";
import { PostContextType, usePostContext } from "../../Post";
import PostFooter from "../PostFooter";
import PostHeader from "../PostHeader";
import { useState } from "react";

const PostGalleryOverlay = ({ hideOverlay }: { hideOverlay: Function }) => {
  const post: PostContextType = usePostContext();
  if (!post) return;
  const [likeShown, setLikeShown] = useState<boolean>(true);
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 flex items-center  ">
      <div className="my-0 mx-auto xl:w-[80%] xl:h-[80%] w-full h-full xl:rounded-xl overflow-hidden  bg-white ">
        <div className=" grid xl:grid-cols-[2fr_1fr] xl:grid-rows-[auto_1fr_1fr] grid-cols-1 grid-rows-[auto_auto_1fr]  h-full overflow-y-auto">
          <div className="order-2 xl:col-start-1 xl:row-start-1  xl:row-end-4 w-full flex justify-center items-center  relative ">
            <div
              className="bg-gray-200 w-full h-full flex justify-center items-center "
              onTouchStart={() => {
                setLikeShown(false);
              }}
              onTouchEnd={() => {
                setLikeShown(true);
              }}
            >
              {post.data.content.map((url, index) => (
                <img
                  src={url}
                  className="block xl:max-h-[500px] max-h-[70vh] pointer-events-none"
                  key={index}
                />
              ))}
            </div>
            <div
              className={
                "xl:hidden absolute  right-0 bottom-3/4 bg-white rounded-l-full transition-opacity " +
                (likeShown ? "opacity-100" : "opacity-0")
              }
            >
              <div className=" ">
                <Button style="REGULAR_OUTLINE">
                  <FaThumbsUp />
                  {post.data.likeNumber}
                </Button>
              </div>
            </div>
          </div>

          <div className=" order-1 p-4">
            <div className=" flex items-start justify-between ">
              <PostHeader />
              <button onClick={() => hideOverlay()}>X</button>
            </div>
            <div>{post.data.description}</div>
          </div>

          <div className="order-3 xl:row-start-2 xl:row-end-4 flex flex-col justify-between">
            <div className="  px-4 py-2 xl:flex flex-row-reverse items-start hidden ">
              <Button style="REGULAR_OUTLINE">
                <FaThumbsUp />
                {post.data.likeNumber}
              </Button>
            </div>
            <div className="w-full flex flex-grow flex-col justify-between ">
              <div>
                <div className="font-semibold text-center bg-slate-300 rounded-b-xl py-1 px-2">
                  Comments {post.data.commentNumber}
                  <div className="h-1 w-12 mx-auto rounded-full bg-black self-center"></div>
                </div>
                <div className="px-2">comment</div>
              </div>
              <div className="w-full ">
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

export default PostGalleryOverlay;
