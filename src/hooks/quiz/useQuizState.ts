import { useState } from "react";
import useQuizCodeExecution from "./sub/useQuizCodeExecution";
import useUserAnswer from "./sub/useUserAnswer";
import { QuizOverallStatus } from "../../components/quizTemplate/userAnswer/UserAnswer.type";

/** Highest level hook that handles quiz state */
const useQuizState = () => {
  const [quizOverallStatus, setQuizOverallStatus] =
    useState<QuizOverallStatus>("INPUTTING");
  const { executionResult, isQueueEmpty } =
    useQuizCodeExecution(quizOverallStatus);
  const { answerItems, answerItemHandlers } = useUserAnswer(executionResult);

  const executeCode = () => setQuizOverallStatus("COMPARING");

  if (isQueueEmpty && quizOverallStatus === "COMPARING") {
    // 딜레이 주는 이유가 있습니다..
    setTimeout(() => {
      const sameLength = answerItems.length === executionResult.length;
      const areEachItemsMatched = answerItems.every(
        (item) => item.itemCompareStatus === "CORRECT"
      );

      setQuizOverallStatus(
        sameLength && areEachItemsMatched ? "CORRECT" : "INCORRECT"
      );
    });
  }

  return {
    executeCode,
    quizOverallStatus,
    executionResult,
    answerItems,
    answerItemHandlers,
  };
};

export default useQuizState;
