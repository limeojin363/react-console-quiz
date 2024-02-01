import { useCallback, useEffect, useState } from "react";
import { QuizStatus } from "../useQuizState";

type ExecutionResultItem = {
  value: string;
};
export type ExecutionResult = ExecutionResultItem[];

// console.log overriding 수행과, 퀴즈 코드의 실행 결과 반환
const useQuizCodeExecution = ({ quizStatus }: { quizStatus: QuizStatus }) => {
  const [queue, setQueue] = useState<string[]>([]);
  const [executionResult, setExecutionResult] = useState<ExecutionResult>([]);

  const pushToQueue = useCallback(
    (item: string | number) => {
      setQueue((prev) => [...prev, item.toString()]);
    },
    [setQueue]
  );

  // JS overriding
  useEffect(() => {
    console.log = (a) => pushToQueue(a);
  }, [pushToQueue]);

  const move = useCallback(() => {
    if (queue.length !== 0) {
      setExecutionResult((prev) => [...prev, { value: queue[0] }]);
      setQueue((prev) => prev.slice(1));
    }
  }, [queue]);

  useEffect(() => {
    if (quizStatus === "CHECKING") {
      const moveTimer = setInterval(move, 1000);
      return () => clearTimeout(moveTimer);
    }
  }, [move, quizStatus]);

  return {
    executionResult,
    isQueueEmpty: queue.length === 0,
  };
};

export default useQuizCodeExecution;
