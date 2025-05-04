import { useState } from "react";
import { PostContextType, usePostContext } from "../../../Post";
import Comment, { CommentType } from "./comments_components/Comment";
import CommentInputForm from "./comments_components/CommentInputForm";
import CommentContextProvider from "./comments_components/CommentContextProvider";

const Comments = ({
  swiped,
  setSwiped,
  hideOverlay,
}: {
  swiped: "up" | "down";
  setSwiped: React.Dispatch<React.SetStateAction<"up" | "down">>;
  hideOverlay?: () => void;
}) => {
  const post: PostContextType = usePostContext();
  if (!post) return null;
  const [startY, setStartY] = useState<number | null>(null);

  const comments: CommentType[] = [
    {
      id: 1,
      username: "jovana_m",
      photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "2025-05-04T10:15:00Z",
      comment: "Baš lepo objašnjeno, hvala ti na ovom postu!",
    },
    {
      id: 2,
      username: "filip_t",
      photoUrl: "https://randomuser.me/api/portraits/men/12.jpg",
      date: "2025-05-04T11:03:00Z",
      comment: "Dodao bih još jedan savet u vezi ove teme...",
    },
    {
      id: 3,
      username: "milica.k",
      photoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "2025-05-04T11:57:00Z",
      comment: "Ovo mi je baš pomoglo, nastavite sa ovakvim sadržajem!",
    },
  ];

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
          swiped === "up" ? "" : "fixed "
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
            {comments.map((data, i) => (
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
  );
};

export default Comments;
