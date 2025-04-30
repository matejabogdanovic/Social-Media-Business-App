import PostView from "./PostView";

const PostViewOverlay = ({ hideOverlay }: { hideOverlay?: Function }) => {
  return (
    <div className="absolute z-10 w-full h-full top-0 left-0 bg-black bg-opacity-50 flex items-center  ">
      <PostView hideOverlay={hideOverlay} />
    </div>
  );
};

export default PostViewOverlay;
