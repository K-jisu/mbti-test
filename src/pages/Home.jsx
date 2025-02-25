import { Link } from "react-router-dom";
import HomeCard from "../components/Home/HomeCard";
import HomeConstant from "../constant/HomeConstant";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4 tracking-tight drop-shadow-lg">
        {HomeConstant.HOME_TITLE}
      </h1>
      <p className="mb-6 text-base md:text-lg text-gray-700 text-center max-w-2xl">
        {HomeConstant.HOME_INFO}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full max-w-5xl">
        {HomeConstant.HOME_MBTI_CARD.map((card) => {
          return (
            <HomeCard
              key={card.MBTI_TEST_TITLE}
              title={card.MBTI_TEST_TITLE}
              content={card.MBTI_TEST_INFO}
            />
          );
        })}
      </div>
      <Link to="/test">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 mb-4"
          type="button"
        >
          {HomeConstant.HOME_BUTTON}
        </button>
      </Link>
    </div>
  );
};

export default Home;
