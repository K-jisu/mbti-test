import React from "react";
import { mbtiDescriptions } from "../../utils/mbtiCalculator";

const ResultItem = ({ testresult, isOwn, deleteMutate, updateMutate }) => {
  const { nickname, date, result, id, visibility } = testresult;
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <h3 className="text-primary-color">{nickname}</h3>
        <span>{date}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl">{result}</h3>
        <p>
          {mbtiDescriptions[result] || "해당 성격 유형에 대한 설명이 없습니다."}
        </p>
      </div>
      {isOwn && (
        <div className="flex gap-3 justify-end">
          <button
            className=" bg-primary-color text-white py-1 px-2 rounded-lg hover:bg-background-color transition duration-300 hover:text-[#FF5A5F]"
            onClick={() => {
              updateMutate({ id, visibility });
            }}
          >
            {visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            className=" bg-primary-color text-white py-1 px-2 rounded-lg hover:bg-background-color transition duration-300 hover:text-[#FF5A5F]"
            onClick={() => {
              deleteMutate(id);
            }}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultItem;
