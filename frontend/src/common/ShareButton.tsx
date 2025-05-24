import { useState } from "react";
import { BiShareAlt } from "react-icons/bi";

import Button, { styleType } from "./Button";
import CopyLinkOverlay from "./CopyLinkOverlay";

const ShareButton = ({
  path,
  style = "REGULAR",
}: {
  path: string;
  style?: styleType;
}) => {
  const [overlayShown, setOverlayShown] = useState<boolean>(false);

  return (
    <>
      <CopyLinkOverlay
        overlayShown={overlayShown}
        setOverlayShown={setOverlayShown}
        path={path}
      />
      <Button
        style={style}
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
