import React from "react";
import ResultList from "../components/Results/ResultList";

const Results = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 tracking-tight drop-shadow-lg">
        MBTI 테스트 결과
      </h1>
      <ResultList />
    </div>
  );
};

export default Results;
