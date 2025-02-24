import React, { useState } from "react";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import TestForm from "../components/Test/TestForm";
import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";
import { useEffect } from "react";
import { getUserProfile } from "../api/auth";

const Test = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [user, setUser] = useState({});
  const [data, setData] = useState({
    id: "",
    nickname: "",
    result: "",
    visibility: true,
    date: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserProfile();
      console.log(data);
      setUser(data);
    };
    fetchData();
  }, []);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);
    const updatedData = {
      id: user.id,
      nickname: user.nickname,
      result: mbtiResult,
      visibility: true,
      date: new Date().toISOString().split("T")[0],
    };
    setData(updatedData);
    const response = await createTestResult(updatedData);
    console.log(response);

    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Test;
