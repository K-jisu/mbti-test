import React from "react";
import ResultItem from "./ResultItem";
import useUserStore from "../../zustand/userStorage";
import useTestResults from "../../hooks/useTestResults";

const ResultList = () => {
  const user = useUserStore((state) => state.user);
  const { testResults, deleteMutate, updateMutate } = useTestResults();

  // Todo
  // 배포, 환경변수,

  return (
    <>
      {testResults?.map((result) => {
        const isOwn = result.userId === user.id;
        if (isOwn) {
          return (
            <ResultItem
              key={result.id}
              testresult={result}
              isOwn={isOwn}
              deleteMutate={deleteMutate}
              updateMutate={updateMutate}
            />
          );
        } else if (result.visibility) {
          return <ResultItem key={result.id} testresult={result} />;
        }
      })}
    </>
  );
};

export default ResultList;
