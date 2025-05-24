import { ReactNode, useEffect, useState } from "react";

import { FaArrowLeft } from "react-icons/fa6";

const Listings = ({
  minListingsToShow,
  numOfCols = 3,
  showCnt = minListingsToShow,
  gap = 0.5, // 0.5rem = gap-2
  data,
  noDataText,
  seeMoreIcon = (
    <div className="">
      <FaArrowLeft className={` -rotate-90  fill-dark-500 `} />
    </div>
  ),
  seeLessIcon = (
    <div className="">
      <FaArrowLeft className={` rotate-90  fill-dark-500 `} />
    </div>
  ),
  mapFunction,
}: {
  minListingsToShow: number;
  numOfCols?: number;
  showCnt?: number;
  gap?: number;
  data: any[] | undefined;
  noDataText: string;
  seeMoreIcon?: any;
  seeLessIcon?: any;
  mapFunction: (value: any, index: number, array: any[]) => ReactNode;
}) => {
  const [showing, setShowing] = useState<number>(minListingsToShow);
  useEffect(() => {
    setShowing(minListingsToShow);
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
        className={`xl:grid flex flex-col   `}
        style={{
          gridTemplateColumns:
            data.length >= minListingsToShow
              ? `repeat(${numOfCols}, minmax(0, 1fr))`
              : "repeat(auto-fit,minmax(0,1fr))",
          gap: `${gap}rem`,
        }}
      >
        {data.slice(0, showing).map(mapFunction)}
      </div>
      {data && data.length > minListingsToShow && (
        <button
          className="self-end place-self-center flex justify-center w-full mt-4 "
          onClick={() => {
            // if it's already showing all then clicking the button will reset showing
            // to minListingsToShow
            // else just show more data by adding showCnt
            setShowing(
              showing >= data.length ? minListingsToShow : showing + showCnt
            );
          }}
        >
          {showing >= data.length ? seeLessIcon : seeMoreIcon}
        </button>
      )}
    </div>
  );
};

export default Listings;
