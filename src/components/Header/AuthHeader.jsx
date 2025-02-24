import HeaderConstant from "../../constant/HeaderConstant";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../zustand/userStorage";

const AuthHeader = () => {
  const { user, accessLogout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    accessLogout();
    navigate("/");
  };
  return (
    <>
      <span>{user.nickname}</span>
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
