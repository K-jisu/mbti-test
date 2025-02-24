import React from "react";
import ResultList from "../components/Results/ResultList";
import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";

const Results = () => {
  

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트 결과
            </h1>
      <ResultList />
    </div>
  );
};

export default Results;
