import { useState } from "react";
import useQuizCodeExecution from "./sub/useQuizCodeExecution";
import useUserAnswer from "./sub/useUserAnswer";
import { QuizOverallStatus } from "../../components/quizTemplate/userAnswer/UserAnswer.type";

/** Highest level hook that handles quiz state */
const useQuizState = () => {
  const [quizOverallStatus, setQuizOverallStatus] =
    useState<QuizOverallStatus>("INPUTTING");
  const executionResult = useQuizCodeExecution(quizOverallStatus);
  const { answerItems, answerItemHandlers } = useUserAnswer(executionResult);

  const executeCode = () => setQuizOverallStatus("COMPARING");

  const resultDecisionNeeded =
    answerItems.every((item) => item.itemCompareStatus !== "AWAITING") &&
    quizOverallStatus === "COMPARING";

  if (resultDecisionNeeded) {
    const isLengthCorrect = answerItems.length === executionResult.length;
    const areEachItemsCorrect = answerItems.every(
      (item) => item.itemCompareStatus === "CORRECT"
    );

    setQuizOverallStatus(
      isLengthCorrect && areEachItemsCorrect ? "CORRECT" : "INCORRECT"
    );
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
