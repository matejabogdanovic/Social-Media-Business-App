import { useState } from "react";
import PostGalleryOverlay from "./post_gallery_components/PostGalleryOverlay";
import { PostContextType, usePostContext } from "../Post";

const PostGallery = ({ className }: { className?: string }) => {
  const [overlayShowing, setOverlayShowing] = useState<boolean>(false);
  const post: PostContextType = usePostContext();
  if (!post) return;
  const showOverlay = () => {
    setOverlayShowing(true);
  };
  const hideOverlay = () => {
    setOverlayShowing(false);
  };
  return (
    <>
      <div className={className + " cursor-pointer"} onClick={showOverlay}>
        {post.data.content.map((url, index) => (
          <img src={url} className="block max-h-[500px]" key={index} />
        ))}
      </div>
      {/* overlay */}
      {overlayShowing && <PostGalleryOverlay hideOverlay={hideOverlay} />}
    </>
  );
};

export default PostGallery;
