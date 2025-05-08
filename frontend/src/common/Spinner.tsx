import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
  borderColor: " #3678dd #3678dd transparent",
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
