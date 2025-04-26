const Banner = ({
  bannerUrl,
  className,
}: {
  bannerUrl?: string;
  className: string;
}) => {
  return (
    <div
      className={
        "block border-black bg-center bg-cover bg-no-repeat border-[1px] " +
        className
      }
      style={{ backgroundImage: `url(${bannerUrl})` }}
    ></div>
  );
};

export default Banner;
