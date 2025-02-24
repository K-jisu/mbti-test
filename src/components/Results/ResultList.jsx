import React from "react";
import ResultItem from "./ResultItem";
import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../../api/testResults";

const ResultList = () => {

  const { data: testResults } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  const visibleResult = testResults?.filter(result=> result.visibility)
  // Todo
  // visibility가 true인 항목만 출력
  // isOwn 변수로 현재 사용자가 작성자인지 확인
  // 본인 소유이면 visible , delete 활성화
  // visible 버튼 클릭 시 상태 변경 delete 클릭시 삭제
  // tanstack으로 리팩터링

  return (
    <>
      {visibleResult?.map((result) => {
        return (
          <>
            <ResultItem
              nickname={result.nickname}
              date={result.date}
              testResult={result.result}
            />
          </>
        );
      })}
    </>
  );
};

export default ResultList;
