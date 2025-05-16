import { useState } from "react";
import { PostContextType, usePostContext } from "../../../Post";
import Comment, { CommentType } from "./comments_components/Comment";
import CommentInputForm from "./comments_components/CommentInputForm";
import CommentContextProvider from "./comments_components/CommentContextProvider";
import { FaArrowLeft } from "react-icons/fa6";
import Loader from "../../../../../../common/loader/Loader";
import { useOutletContext } from "react-router-dom";
import { All } from "../../../../../../roles/All";

const Comments = ({
  swiped,
  setSwiped,
  hideOverlay,
}: {
  swiped: "up" | "down";
  setSwiped: React.Dispatch<React.SetStateAction<"up" | "down">>;
  hideOverlay?: () => void;
}) => {
  const { user }: { user: All } = useOutletContext();
  const post: PostContextType = usePostContext();
  if (!post) return null;
  const [startY, setStartY] = useState<number | null>(null);
  const [comments, setComments] = useState<CommentType[]>();

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
    <Loader
      loaderFunction={() =>
        user.fetchPostComments(post.data.id).then((d) => {
          console.log(d);
          setComments(d ?? undefined);
          return d;
        })
      }
      loadingDependencyList={[post]}
      errorCondition={!comments}
    >
      <div
        className={`flex-grow bg-light  grid grid-rows-[auto_1fr] overflow-hidden  `}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={() => {
          setSwiped((prev) => (prev === "up" ? "down" : "up"));
        }}
      >
        {/* comments header */}
        <div
          className={`w-full  xl:static  ${
            swiped === "up" ? "" : "fixed"
          } bottom-0 `}
        >
          <div className="font-semibold w-full bg-light text-primary  py-1 px-2 mt-auto grid justify-center rounded-t-3xl border-t-2 border-primary  ">
            <FaArrowLeft
              className={`${
                swiped === "up" ? "-rotate-90 " : "rotate-90 "
              }  fill-primary mx-auto xl:hidden `}
            />
            Comments {post.data.commentNumber}
          </div>
        </div>

        {/* comments */}
        <div
          className={` grid-rows-[1fr_auto] xl:grid overflow-hidden
            ${swiped === "up" ? "grid" : "hidden"}`}
        >
          <CommentContextProvider>
            <div
              className="overflow-y-scroll"
              onTouchStart={(e) => {
                e.stopPropagation();
              }}
              onTouchEnd={(e) => {
                e.stopPropagation();
              }}
            >
              {comments?.map((data, i) => (
                <Comment data={data} key={i} hideOverlay={hideOverlay} />
              ))}
            </div>
            {/* input */}
            <div className="">
              <CommentInputForm />
            </div>
          </CommentContextProvider>
        </div>
      </div>
    </Loader>
  );
};

export default Comments;
