import React, { useState } from "react";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import TestForm from "../components/Test/TestForm";
import useUserStore from "../zustand/userStorage";

const Test = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const user = useUserStore((state) => state.user);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);

    const updatedData = {
      userId: user.id,
      nickname: user.nickname,
      result: mbtiResult,
      visibility: true,
      date: new Date().toISOString().split("T")[0],
    };

    await createTestResult(updatedData);
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    // <div className="w-full flex flex-col items-center justify-center bg-white">
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 tracking-tight drop-shadow-lg">
        MBTI 테스트
      </h1>
      {!result ? (
        <>
          <TestForm onSubmit={handleTestSubmit} />
        </>
      ) : (
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            테스트 결과: {result}
          </h2>
          <p className="text-gray-600 text-center">
            {mbtiDescriptions[result] ||
              "해당 성격 유형에 대한 설명이 없습니다."}
          </p>
          <button
            onClick={handleNavigateToResults}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            결과 페이지로 이동하기
          </button>
        </div>
      )}
    </div>
    // </div>
  );
};

export default Test;
