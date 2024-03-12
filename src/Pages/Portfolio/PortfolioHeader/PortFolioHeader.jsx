
import { Link } from "react-router-dom";

const PortFolioHeader = () => {
  return (
    <div className="text-center font-bold">
      <Link className="mx-[1rem]" to="/all">
        All
      </Link>
      <Link className="mx-[1rem]" to="/ads">
        Ads Design
      </Link>
      <Link className="mx-[1rem]" to="/apps">
        Apps
      </Link>
      <Link className="mx-[1rem]" to="/banner">
        Banner & Poster
      </Link>
      <Link className="mx-[1rem]" to="/website">
        Website
      </Link>
    </div>
  );
};

export default PortFolioHeader;
