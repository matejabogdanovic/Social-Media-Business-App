import { useState } from "react";
import { PostContextType, usePostContext } from "../../../Post";

const Comments = ({
  swiped,
  setSwiped,
}: {
  swiped: "up" | "down";
  setSwiped: React.Dispatch<React.SetStateAction<"up" | "down">>;
}) => {
  const post: PostContextType = usePostContext();
  if (!post) return null;
  const [startY, setStartY] = useState<number | null>(null);
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
    <div
      className={`flex-grow bg-white grid grid-rows-[auto_1fr] overflow-hidden  `}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* comments header */}
      <div
        className={`w-full bg-white xl:static ${
          swiped === "up" ? "" : "fixed"
        } bottom-0 `}
        onClick={() => {
          setSwiped((prev) => (prev === "up" ? "down" : "up"));
        }}
      >
        <div className="font-semibold text-center w-full rounded-b-xl   py-1 px-2 mt-auto bg-slate-300 ">
          Comments {post.data.commentNumber}
          <div className="h-1 w-12 mx-auto rounded-full bg-black self-center"></div>
        </div>
      </div>

      {/* comments */}
      <div
        className={` grid-rows-[1fr_auto] xl:grid overflow-hidden
            ${swiped === "up" ? "grid" : "hidden"}`}
      >
        <div
          className="overflow-y-scroll"
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
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>

          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2">comment</div>
          <div className="px-2  bg-black">comment</div>
        </div>
        {/* input */}
        <div className="">
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
  );
};

export default Comments;
