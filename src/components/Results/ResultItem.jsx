import React from "react";
import { mbtiDescriptions } from "../../utils/mbtiCalculator";

const ResultItem = ({ nickname, date, testResult }) => {
  return (
    <div>
      <div>
        <h3>{nickname}</h3>
        <span>{date}</span>
      </div>
      <div>
        <h3>{testResult}</h3>
        <p>
          {mbtiDescriptions[testResult] ||
            "해당 성격 유형에 대한 설명이 없습니다."}
        </p>
      </div>
      <div>
        <button onClick={()=>{}}>공개로 전환</button>
        <button onClick={()=>{}}>삭제</button>
      </div>
    </div>
  );
};

export default ResultItem;
