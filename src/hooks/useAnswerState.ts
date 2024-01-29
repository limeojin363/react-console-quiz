import { useState } from "react";
import uuid from "react-uuid";

type InputItem = {
  id: string;
  value: string;
};
type AnswerState = InputItem[];

const useAnswerState = () => {
  const [answerState, setAnswerState] = useState<AnswerState>([
    { id: uuid(), value: "1" },
    { id: uuid(), value: "32" },
    { id: uuid(), value: "3" },
  ]);

  const changeValue = (id: string, value: string) => {
    setAnswerState((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : { ...item }))
    );
  };

  const addNewItem = () => {
    setAnswerState((prev) => [
      ...prev,
      {
        id: uuid(),
        value: "",
      },
    ]);
  };

  const deleteItem = (id: string) => {
    setAnswerState((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    answerState,
    setAnswerState,
    changeValue,
    addNewItem,
    deleteItem,
  };
};

export default useAnswerState;
