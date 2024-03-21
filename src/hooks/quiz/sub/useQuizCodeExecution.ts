import { useCallback, useEffect, useState } from "react";
import { QuizOverallStatus } from "../../../components/quizTemplate/userAnswer/UserAnswer.type";

type ExecutionResultItem = {
  value: string;
};
export type ExecutionResult = ExecutionResultItem[];

// console.log overriding 수행과, 퀴즈 코드의 실행 결과 반환
const useQuizCodeExecution = (quizOverallStatus: QuizOverallStatus) => {
  const [queue, setQueue] = useState<string[]>([]);
  const [executionResult, setExecutionResult] = useState<ExecutionResult>([]);

  // JS overriding
  useEffect(() => {
    const pushToQueue = (item: string | number) => {
      setQueue((prev) => [...prev, item.toString()]);
    };

    console.log = (item) => pushToQueue(item);
  }, []);

  const moveFromQueueToResult = useCallback(() => {
    if (queue.length !== 0) {
      setExecutionResult((prev) => [...prev, { value: queue[0] }]);
      setQueue((prev) => prev.slice(1));
    }
  }, [queue]);

  useEffect(() => {
    if (quizOverallStatus === "COMPARING") {
      const moveTimer = setInterval(moveFromQueueToResult, 1000);
      return () => clearTimeout(moveTimer);
    }
  }, [moveFromQueueToResult, quizOverallStatus]);

  return { executionResult, isQueueEmpty: queue.length === 0 };
};

export default useQuizCodeExecution;
