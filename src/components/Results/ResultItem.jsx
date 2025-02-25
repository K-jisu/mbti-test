import React from "react";
import { mbtiDescriptions } from "../../utils/mbtiCalculator";

const ResultItem = ({ testresult, isOwn, deleteMutate, updateMutate }) => {
  const { nickname, date, result, id, visibility } = testresult;

  const handleDelete = () => {
    if (confirm("삭제하시겠습니까?")) {
      deleteMutate(id);
      alert("삭제되었습니다.");
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-4xl flex flex-col gap-4 ">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-blue-600 font-semibold text-lg">{nickname}</h3>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-bold text-gray-800">{result}</h3>
        <p className="text-gray-600">
          {mbtiDescriptions[result] || "해당 성격 유형에 대한 설명이 없습니다."}
        </p>
      </div>
      {isOwn && (
        <div className="flex gap-3 justify-end mt-4">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 hover:shadow-lg transition-transform transform hover:scale-105"
            onClick={() => {
              updateMutate({ id, visibility });
            }}
          >
            {visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 hover:shadow-lg transition-transform transform hover:scale-105"
            onClick={handleDelete}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultItem;
