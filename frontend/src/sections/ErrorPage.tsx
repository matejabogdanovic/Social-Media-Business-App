const ErrorPage = ({
  message = "This page doesn't exist",
}: {
  message?: string;
}) => {
  return <div>{message}</div>;
};

export default ErrorPage;
