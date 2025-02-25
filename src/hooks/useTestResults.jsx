import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "../api/testResults";

const useTestResults = () => {
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
      alert("게시글 삭제가 실패 되었습니다.");
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

  return { testResults, deleteMutate, updateMutate };
};

export default useTestResults;
