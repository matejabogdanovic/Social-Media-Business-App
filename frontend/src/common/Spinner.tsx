import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
  borderColor: " #39424d #39424d transparent",
};

const Spinner = ({
  loading,
  className = "",
}: {
  loading: boolean;
  className?: string;
}) => {
  return (
    <ClipLoader
      loading={loading}
      cssOverride={override}
      className={className}
      size={150}
    />
  );
};
export default Spinner;
