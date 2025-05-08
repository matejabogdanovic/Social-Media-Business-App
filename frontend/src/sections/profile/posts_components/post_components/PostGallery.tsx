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
        " cursor-pointer flex xl:flex-col justify-start items-center overflow-x-scroll xl:overflow-x-hidden max-h-[500px] w-full "
      }
      onClick={showOverlay}
    >
      {post.data.content.map((url, index) => (
        <div
          key={index}
          className="min-w-full flex justify-center items-center"
        >
          <img src={url} className="max-h-[500px] " />
        </div>
      ))}
    </div>
  );
};

export default PostGallery;
