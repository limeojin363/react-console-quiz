import { useEffect, useState } from "react";
import { AnswerInput, AnswerInputItem } from "./useAnswerInput";
import { ExecutionResult } from "./useQuizCodeExecution";
import { QuizStatus } from "../useQuizState";

type Compare = "AWAITING" | "INCORRECT" | "CORRECT";

export type AnswerCheckedItem = AnswerInputItem & {
  compare: Compare;
};

type AnswerChecked = AnswerCheckedItem[];

type UseAnswerCheckParams = {
  answerInput: AnswerInput;
  executionResult: ExecutionResult;
  quizStatus: QuizStatus;
};

const getInitialAnswerCheckedState = (
  answerInput: AnswerInput
): AnswerChecked =>
  answerInput.map((item) => ({ ...item, compare: "AWAITING" }));

const useAnswerCheck = ({
  answerInput,
  executionResult,
  quizStatus,
}: UseAnswerCheckParams) => {
  const [checkedAnswerItems, setCheckedItems] = useState<AnswerChecked>(
    getInitialAnswerCheckedState(answerInput)
  );

  useEffect(() => {
    setCheckedItems(
      answerInput.map((item, i) => ({
        ...item,
        compare: (() => {
          if (!executionResult[i]) return "AWAITING";
          if (answerInput[i].value === executionResult[i].value)
            return "CORRECT";
          return "INCORRECT";
        })(),
      }))
    );
  }, [answerInput, executionResult]);

  const isOverallTrue: Compare = (() => {
    if (quizStatus !== "FINISHED") return "AWAITING";
    if (
      answerInput.length === executionResult.length &&
      checkedAnswerItems.every((item) => item.compare === "CORRECT")
    )
      return "CORRECT";
    return "INCORRECT";
  })();

  return { checkedAnswerItems, isOverallTrue };
};

export default useAnswerCheck;
