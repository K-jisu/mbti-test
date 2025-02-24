import { Link } from "react-router-dom";
import HeaderConstant from "../../constant/HeaderConstant";

const NotAuthHeader = () => {
  return (
    <>
      <Link
        to="/login"
        className="text-gray-700 hover:text-blue-600 transition "
      >
        {HeaderConstant.HEADER_LOGIN}
      </Link>
      <Link
        to="/signup"
        className="text-gray-700 hover:text-blue-600 transition "
      >
        {HeaderConstant.HEADER_SIGNUP}
      </Link>
    </>
  );
};

export default NotAuthHeader;
