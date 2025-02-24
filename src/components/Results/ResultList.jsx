import React from "react";
import ResultItem from "./ResultItem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "../../api/testResults";
import useUserStore from "../../zustand/userStorage";

const ResultList = () => {
  const user = useUserStore((state) => state.user);
  const queryClient = useQueryClient();

  const { data: testResults } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: updateMutate } = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      {testResults?.map((result) => {
        const isOwn = result.userId === user.id;
        if (isOwn) {
          return (
            <>
              <ResultItem
                testresult={result}
                isOwn={isOwn}
                deleteMutate={deleteMutate}
                updateMutate={updateMutate}
              />
            </>
          );
        } else if (result.visibility) {
          return (
            <>
              <ResultItem testresult={result} />
            </>
          );
        }
      })}
    </>
  );
};

export default ResultList;
