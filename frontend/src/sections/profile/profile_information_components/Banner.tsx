import { ProfileData } from "../ProfilePage";
import Bubble from "./profile_information_buttons/Bubble";

const Banner = ({
  className,
  data,
}: {
  className: string;
  data: ProfileData | undefined;
}) => {
  return (
    <div
      className={
        "flex items-center bg-center bg-cover bg-no-repeat  " + className
      }
      style={{ backgroundImage: `url(${data?.bannerUrl})` }}
    >
      <Bubble data={data} />
    </div>
  );
};

export default Banner;
