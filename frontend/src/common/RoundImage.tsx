const RoundImage = ({
  photoUrl,
  className,
}: {
  photoUrl?: string;
  className: string;
}) => {
  return (
    <div
      className={
        "inline-block  aspect-square rounded-full bg-center  bg-no-repeat  bg-cover " +
        className
      }
      style={{ backgroundImage: `url(${photoUrl})` }}
    ></div>
  );
};

export default RoundImage;
