const Banner = ({
  bannerUrl,
  className,
}: {
  bannerUrl?: string;
  className: string;
}) => {
  return (
    <div
      className={"block bg-center bg-cover bg-no-repeat " + className}
      style={{ backgroundImage: `url(${bannerUrl})` }}
    ></div>
  );
};

export default Banner;
