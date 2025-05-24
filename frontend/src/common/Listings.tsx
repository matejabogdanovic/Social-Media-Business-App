import { ReactNode, useEffect, useState } from "react";

import { FaArrowLeft } from "react-icons/fa6";

const Listings = ({
  minListingsToShow,
  data,
  noDataText,

  seeMoreIcon = (
    <div>
      <FaArrowLeft className={` rotate-90  fill-dark-500 `} />
    </div>
  ),
  seeLessIcon = (
    <div>
      <FaArrowLeft className={` -rotate-90  fill-dark-500 `} />
    </div>
  ),
  mapFunction,
}: {
  minListingsToShow: number;
  data: any[] | undefined;
  noDataText: string;

  seeMoreIcon?: any;
  seeLessIcon?: any;
  mapFunction: (value: any, index: number, array: any[]) => ReactNode;
}) => {
  const [showMore, setShowMore] = useState<number>(0);
  useEffect(() => {
    setShowMore(0);
  }, [data]);
  return !data || data?.length === 0 ? (
    noDataText !== "" ? (
      <div className={noDataText === "" ? "hidden" : ""}>{noDataText}</div>
    ) : (
      ""
    )
  ) : (
    <div>
      <div
        className={`grid ${
          showMore >= 3
            ? "xl:grid-cols-3"
            : "xl:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
        } gap-2`}
      >
        {data.slice(0, minListingsToShow + showMore).map(mapFunction)}
      </div>
      {data && data.length > minListingsToShow && (
        <div className="self-end place-self-center mt-4">
          <button
            onClick={() => {
              if (showMore + minListingsToShow >= data.length) {
                setShowMore(0);
              } else {
                setShowMore(showMore + minListingsToShow);
              }
            }}
          >
            {showMore + minListingsToShow < data.length
              ? seeLessIcon
              : seeMoreIcon}
          </button>
        </div>
      )}
    </div>
  );
};

export default Listings;
