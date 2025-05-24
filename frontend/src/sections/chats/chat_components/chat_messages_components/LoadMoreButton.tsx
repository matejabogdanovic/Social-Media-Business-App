import { FaArrowLeft } from "react-icons/fa6";
import Spinner from "../../../../common/Spinner";

const LoadMoreButton = ({
  loading,
  loadMoreData,
}: {
  loading: boolean;
  loadMoreData: Function;
}) => {
  return (
    <button
      onClick={() => {
        loadMoreData();
      }}
      disabled={loading}
      className="flex justify-center items-center p-4 my-4 from-secondary-100 to-secondary-50 bg-gradient-to-b  w-fit self-center  rounded-full   "
    >
      {loading ? (
        <Spinner loading={loading} className="!max-w-5 !max-h-5 !my-0 " />
      ) : (
        <FaArrowLeft className="rotate-90 !min-w-5 !min-h-5 fill-dark-500" />
      )}
    </button>
  );
};

export default LoadMoreButton;
