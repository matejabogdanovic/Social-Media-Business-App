import { useState } from "react";

const TextLimiter = ({
  text,
  limit,
  onSeeMore,
}: {
  text: string;
  limit: number;
  onSeeMore?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  if (limit > text.length) return <>{text}</>;
  return (
    <>
      {seeMore ? text + " " : text.slice(0, limit) + "... "}
      <button
        type="button"
        className="hover:underline font-semibold "
        onClick={onSeeMore ?? (() => setSeeMore((prev) => !prev))}
      >
        {seeMore ? "See Less" : "See More"}
      </button>
    </>
  );
};

export default TextLimiter;
