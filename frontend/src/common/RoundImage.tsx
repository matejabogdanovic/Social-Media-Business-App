const RoundImage = ({
  photoUrl,
  className,
}: {
  photoUrl: string;
  className: string;
}) => {
  return (
    <div
      className={
        "inline-block border-black aspect-square rounded-full bg-center bg-contain bg-no-repeat border-[1px] " +
        className
      }
      style={{ backgroundImage: `url(${photoUrl})` }}
    ></div>
  );
};

export default RoundImage;
