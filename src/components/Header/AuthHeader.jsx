import HeaderConstant from "../../constant/HeaderConstant";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../zustand/userStorage";

const AuthHeader = () => {
  const { user, accessLogout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    if (confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다.");
      accessLogout();
      navigate("/");
    }
  };
  return (
    <>
      <span className="text-gray-700 hover:text-blue-600 transition">
        {user.nickname}님 환영합니다.
      </span>
      <Link
        to="/profile"
        className="text-gray-700 hover:text-blue-600 transition "
      >
        {HeaderConstant.HEADER_PROFILE}
      </Link>
      <Link
        to="/test"
        className="text-gray-700 hover:text-blue-600 transition "
      >
        {HeaderConstant.HEADER_TEST}
      </Link>
      <Link
        to="/results"
        className="text-gray-700 hover:text-blue-600 transition "
      >
        {HeaderConstant.HEADER_TEST_RESULT}
      </Link>
      <button
        onClick={handleLogout}
        className="text-gray-700 hover:text-blue-600 transition "
      >
        {HeaderConstant.HEADER_LOGOUT}
      </button>
    </>
  );
};

export default AuthHeader;
