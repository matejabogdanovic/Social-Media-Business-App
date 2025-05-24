import { useState } from "react";
import CloseButton from "./CloseButton";

const CopyLinkOverlay = ({
  overlayShown,
  setOverlayShown,
  path,
}: {
  overlayShown: boolean;
  setOverlayShown: React.Dispatch<React.SetStateAction<boolean>>;
  path: string;
}) => {
  const [text, setText] = useState<string>(path);
  return overlayShown ? (
    <div className="fixed top-0 left-0 w-full h-full bg-dark-900 bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-light rounded-xl p-2 flex  gap-2">
        <input
          type="text"
          className="rounded-xl border-[1px] p-2 xl:min-w-[50ch] w-full overflow-auto "
          value={text}
          readOnly={true}
        />

        <CloseButton onClick={() => setOverlayShown(false)} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CopyLinkOverlay;
