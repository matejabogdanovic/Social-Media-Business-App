import { PostContextType, usePostContext } from "../Post";
import PostViewOverlay from "./post_gallery_components/PostViewOverlay";

const PostGallery = ({
  className,
  overlayShowing,
  showOverlay,
  hideOverlay,
}: {
  overlayShowing: boolean;
  showOverlay: () => void;
  hideOverlay: () => void;
  className?: string;
}) => {
  const post: PostContextType = usePostContext();
  if (!post) return;

  return (
    <>
      <div className={className + " cursor-pointer"} onClick={showOverlay}>
        {post.data.content.map((url, index) => (
          <img src={url} className="block max-h-[500px]" key={index} />
        ))}
      </div>
      {/* overlay */}
      {overlayShowing && <PostViewOverlay hideOverlay={hideOverlay} />}
    </>
  );
};

export default PostGallery;
