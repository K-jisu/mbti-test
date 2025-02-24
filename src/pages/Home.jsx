import { Link } from "react-router-dom";
import HomeCard from "../components/Home/HomeCard";
import HomeConstant from "../constant/HomeConstant";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-primary-color mb-6">
        {HomeConstant.HOME_TITLE}
      </h1>
      <p className="mb-8 text-lg text-secondary-color">
        {HomeConstant.HOME_INFO}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {HomeConstant.HOME_MBTI_CARD.map((card) => {
          return (
            <HomeCard
              title={card.MBTI_TEST_TITLE}
              content={card.MBTI_TEST_INFO}
            />
          );
        })}
      </div>
      <Link to="/test">
        <button
          className="inline-block bg-primary-color text-white py-2 px-6 rounded-full hover:bg-background-color transition mb-4 hover:text-[#FF5A5F]"
          type="button"
        >
          {HomeConstant.HOME_BUTTON}
        </button>
      </Link>
    </div>
  );
};

export default Home;
