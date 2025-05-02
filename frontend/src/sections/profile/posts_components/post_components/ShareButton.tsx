import { BiShareAlt } from "react-icons/bi";
import Button from "../../../../common/Button";
import { PostContextType, usePostContext } from "../Post";
import { useState } from "react";

const ShareButton = () => {
  const [overlayShown, setOverlayShown] = useState<boolean>(false);
  const post: PostContextType = usePostContext();

  if (!post) return null;

  const [text, setText] = useState<string>(
    `${window.location.origin}/profile/${post.data.username}/posts/${post.data.id}`
  );
  return (
    <>
      {overlayShown && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white rounded-xl p-2 flex  gap-2">
            <input
              type="text"
              className="rounded-xl border-[1px] p-2 xl:min-w-[50ch] w-full overflow-auto "
              value={text}
              readOnly={true}
            />

            <button className="p-2 " onClick={() => setOverlayShown(false)}>
              X
            </button>
          </div>
        </div>
      )}
      <Button
        style="REGULAR"
        onClick={() => {
          setOverlayShown(true);
        }}
      >
        <BiShareAlt />
      </Button>
    </>
  );
};

export default ShareButton;
