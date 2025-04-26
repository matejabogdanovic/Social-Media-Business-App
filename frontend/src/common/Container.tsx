const Container = ({
  children,

  className,
}: {
  children: React.ReactNode;

  className?: string;
}) => {
  return (
    <div
      className={`container max-w-[1000px] my-0 mx-auto  ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
