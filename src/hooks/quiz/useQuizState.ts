import { useState } from "react";
import useAnswerInput from "./sub/useAnswerInput";
import useQuizCodeExecution from "./sub/useQuizCodeExecution";
import useAnswerCheck from "./sub/useAnswerCheck";

export type QuizStatus = "INPUTTING" | "CHECKING" | "FINISHED";

/** Highest level hook that handles quiz state(한국말로 짬통) */
const useQuizState = () => {
  const [quizStatus, setQuizStatus] = useState<QuizStatus>("INPUTTING");
  const { executionResult, isQueueEmpty } = useQuizCodeExecution({
    quizStatus,
  });
  const answerInputObject = useAnswerInput();
  const { checkedAnswerItems, isOverallTrue } = useAnswerCheck({
    quizStatus,
    answerInput: answerInputObject.answerInputState,
    executionResult,
  });

  const executeCode = () => {
    setQuizStatus("CHECKING");
  };

  if (quizStatus === "CHECKING" && isQueueEmpty) {
    setQuizStatus("FINISHED");
  }

  return {
    executeCode,
    quizStatus,
    executionResult,
    answerInputObject,
    checkedAnswerItems,
    isOverallTrue,
  };
};

export default useQuizState;
