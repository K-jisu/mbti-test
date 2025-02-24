import { Link } from "react-router-dom";
import HeaderConstant from "../../constant/HeaderConstant";
import AuthHeader from "./AuthHeader";
import NotAuthHeader from "./NotAuthHeader";
import useUserStore from "../../zustand/userStorage";

const Header = () => {
  const { isAuthenticated } = useUserStore();

  return (
    <header className=" p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center text-white">
        <Link to="/" className="text-primary-color font-semibold">
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
