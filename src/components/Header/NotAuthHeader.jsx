import { Link } from "react-router-dom";
import HeaderConstant from "../../constant/HeaderConstant";

const NotAuthHeader = () => {
  return (
    <>
      <Link to="/login" className="text-primary-color hover:text-gray-300 ">
        {HeaderConstant.HEADER_LOGIN}
      </Link>
      <Link to="/signup" className="text-primary-color hover:text-gray-300 ">
        {HeaderConstant.HEADER_SIGNUP}
      </Link>
    </>
  );
};

export default NotAuthHeader;
