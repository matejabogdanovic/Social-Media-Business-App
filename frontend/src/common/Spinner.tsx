import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
  borderColor: "secondary-100 secondary-100 transparent",
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
