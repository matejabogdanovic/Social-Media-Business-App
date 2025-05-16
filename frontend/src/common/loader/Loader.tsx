import { ReactNode, useEffect, useState } from "react";
import Spinner from "../Spinner";
import ErrorPage from "../../sections/ErrorPage";

const Loader = ({
  loaderFunction,
  loadingDependencyList = [],
  children,
  errorCondition,
  errorMessage,
}: {
  loaderFunction: () => Promise<any>;
  loadingDependencyList?: React.DependencyList;
  children: ReactNode;
  errorCondition?: boolean;
  errorMessage?: string;
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loaderFunction().then((e) => {
      console.log("Loader loaded: ", e);
      setLoading(false);
    });
  }, loadingDependencyList);

  if (loading) return <Spinner loading={loading} />;
  if (errorCondition) return <ErrorPage message={errorMessage} />;
  return children;
};

export default Loader;
