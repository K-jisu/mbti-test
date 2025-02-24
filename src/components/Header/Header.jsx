import { Link } from "react-router-dom";
import HeaderConstant from "../../constant/HeaderConstant";
import AuthHeader from "./AuthHeader";
import NotAuthHeader from "./NotAuthHeader";
import useUserStore from "../../zustand/userStorage";

const Header = () => {
  const { isAuthenticated } = useUserStore();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <nav className="container mx-auto flex justify-between items-center text-white">
        <Link to="/" className="text-2xl font-semibold text-blue-500">
          {HeaderConstant.HEADER_HOME}
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? <AuthHeader /> : <NotAuthHeader />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
