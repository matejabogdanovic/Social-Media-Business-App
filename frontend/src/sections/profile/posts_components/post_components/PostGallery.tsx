import { PostContextType, usePostContext } from "../Post";

const PostGallery = ({
  className,
  showOverlay,
}: {
  showOverlay?: () => void;

  className?: string;
}) => {
  const post: PostContextType = usePostContext();
  if (!post) return;

  return (
    <div className={className + " cursor-pointer"} onClick={showOverlay}>
      {post.data.content.map((url, index) => (
        <img src={url} className="block max-h-[500px]" key={index} />
      ))}
    </div>
  );
};

export default PostGallery;
