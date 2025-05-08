import React, { useEffect, useLayoutEffect, useRef } from "react";
import Spinner from "../../../../common/Spinner";
import { useParams } from "react-router-dom";

const LoadMoreSpinner = ({
  scrollContainerRef,
  loadMoreData,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  loadMoreData: Function;
}) => {
  const loadMoreSpinnerRef = useRef<HTMLDivElement>(null);
  //const loading = useRef(false);
  const check = useRef<boolean>(false);
  const { username } = useParams();

  const loadMoreIfNeeded = () => {
    const el = scrollContainerRef.current;
    if (
      !el //|| loading.current
    )
      return;

    const maxScrollHeight = el.scrollHeight - el.clientHeight;
    const shouldLoadMore = Math.abs(el.scrollTop) >= maxScrollHeight;
    console.log(maxScrollHeight, Math.abs(el.scrollTop), shouldLoadMore);
    if (shouldLoadMore) {
      // loading.current = true;
      console.log("Loading more...");
      loadMoreData();
      console.log("Loaded");
      check.current = !check.current;
      // loading.current = false;
    }
  };

  // Initial + data-change check
  useEffect(() => {
    console.log("Checking");
    loadMoreIfNeeded();
  }, [check.current]);

  // Scroll listener
  useLayoutEffect(() => {
    //loading.current = false;
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", loadMoreIfNeeded);
    }
    loadMoreIfNeeded();
    return () => {
      if (el) {
        el.removeEventListener("scroll", loadMoreIfNeeded);
      }
    };
  }, [username]);

  return (
    <div className="py-4" ref={loadMoreSpinnerRef}>
      <Spinner loading={true} className="!max-w-6 !max-h-6 !my-0 " />
    </div>
  );
};

export default LoadMoreSpinner;
