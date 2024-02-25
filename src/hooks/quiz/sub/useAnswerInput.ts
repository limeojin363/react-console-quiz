import { useState } from "react";
import uuid from "react-uuid";
import { TUserAnswerItem } from "../../../components/quizTemplate/userAnswer/UserAnswer.type";

const INITIAL_ANSWER: TUserAnswerItem[] = [
  {
    id: uuid(),
    value: "1",
    itemCompareStatus: "AWAITING",
  },
  {
    id: uuid(),
    value: "32",
    itemCompareStatus: "AWAITING",
  },
  {
    id: uuid(),
    value: "3",
    itemCompareStatus: "AWAITING",
  },
];

const useUserAnswer = () => {
  const [answerInputState, setAnswerInputState] =
    useState<TUserAnswerItem[]>(INITIAL_ANSWER);

  const updateItemValue = (id: string, value: string) => {
    setAnswerInputState((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : { ...item }))
    );
  };

  const createItem = () => {
    setAnswerInputState((prev) => [
      ...prev,
      {
        id: uuid(),
        value: "",
        itemCompareStatus: "AWAITING",
      },
    ]);
  };

  const deleteItem = (id: string) => {
    setAnswerInputState((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    answerInputState,
    updateItemValue,
    createItem,
    deleteItem,
  };
};

export default useUserAnswer;
