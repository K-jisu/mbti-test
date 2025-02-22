import { useContext } from "react";
import HeaderConstant from "../../constant/HeaderConstant";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const AuthHeader = () => {
  const { accessLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    accessLogout();
    navigate("/");
  };
  return (
    <>
      <Link to="/profile" className="text-primary-color hover:text-gray-300 ">
        {HeaderConstant.HEADER_PROFILE}
      </Link>
      <Link to="/test" className="text-primary-color hover:text-gray-300 ">
        {HeaderConstant.HEADER_TEST}
      </Link>
      <Link to="/results" className="text-primary-color hover:text-gray-300 ">
        {HeaderConstant.HEADER_TEST_RESULT}
      </Link>
      <button
        onClick={handleLogout}
        className="text-primary-color hover:text-gray-300 "
      >
        {HeaderConstant.HEADER_LOGOUT}
      </button>
    </>
  );
};

export default AuthHeader;
