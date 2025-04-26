import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BackButton = ({
  location,
  className = "",
}: {
  location?: string;
  className?: string;
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        if (location) navigate(location);
        else navigate(-1);
      }}
      className={"p-4 " + className}
    >
      <FaArrowLeft />
    </button>
  );
};

export default BackButton;
