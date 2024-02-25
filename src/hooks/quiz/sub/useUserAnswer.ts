import { useState } from "react";
import uuid from "react-uuid";
import {
  AnswerItemHandlers,
  TUserAnswerItem,
} from "../../../components/quizTemplate/userAnswer/UserAnswer.type";
import { ExecutionResult } from "./useQuizCodeExecution";

const INITIAL_ANSWER: TUserAnswerItem[] = [
  {
    id: uuid(),
    value: "ㅎㅇ",
    itemCompareStatus: "AWAITING",
  },
];

const useUserAnswer = (executionResult: ExecutionResult) => {
  const [answerItems, setAnswerItems] =
    useState<TUserAnswerItem[]>(INITIAL_ANSWER);

  const answerItemHandlers: AnswerItemHandlers = {
    updateItemValue: (id: string, value: string) => {
      setAnswerItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, value } : { ...item }))
      );
    },
    createItem: () => {
      setAnswerItems((prev) => [
        ...prev,
        {
          id: uuid(),
          value: "",
          itemCompareStatus: "AWAITING",
        },
      ]);
    },
    deleteItem: (id: string) => {
      setAnswerItems((prev) => prev.filter((item) => item.id !== id));
    },
  };

  const awaitingAnswerItemIndex = answerItems.findIndex(
    (item) => item.itemCompareStatus === "AWAITING"
  );
  const updatedExecutionResultIndex = executionResult.length - 1;

  if (awaitingAnswerItemIndex === updatedExecutionResultIndex)
    setAnswerItems(
      answerItems.map((item, i) => ({
        ...item,
        itemCompareStatus: (() => {
          if (!executionResult[i]) return "AWAITING";
          if (answerItems[i].value === executionResult[i].value)
            return "CORRECT";
          return "INCORRECT";
        })(),
      }))
    );

  return {
    answerItems,
    answerItemHandlers,
  };
};

export default useUserAnswer;
