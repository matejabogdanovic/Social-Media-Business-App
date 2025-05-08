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
    <div
      className={
        className +
        " cursor-pointer flex flex-col justify-start items-center overflow-y-scroll max-h-[500px] w-full"
      }
      onClick={showOverlay}
    >
      {post.data.content.map((url, index) => (
        <img src={url} className="max-h-[500px]" key={index} />
      ))}
    </div>
  );
};

export default PostGallery;
