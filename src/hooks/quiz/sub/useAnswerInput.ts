import { useState } from "react";
import { OnDragEndResponder } from "react-beautiful-dnd";
import uuid from "react-uuid";

export type AnswerInputItem = {
  id: string;
  value: string;
};
export type AnswerInput = AnswerInputItem[];

const INITIAL_ANSWER: AnswerInput = [
  { id: uuid(), value: "1" },
  { id: uuid(), value: "32" },
  { id: uuid(), value: "3" },
];

const useAnswerInput = () => {
  const [answerInputState, setAnswerInputState] =
    useState<AnswerInput>(INITIAL_ANSWER);

  const changeValue = (id: string, value: string) => {
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
        compare: "AWAITING",
      },
    ]);
  };

  const deleteItem = (id: string) => {
    setAnswerInputState((prev) => prev.filter((item) => item.id !== id));
  };

  // dnd 컴포넌트 이용에 필요(여기 넣는게 적절치는 않아보이지만.. 일단은 차악을 선택)
  const onDragItemEnd: OnDragEndResponder = ({ source, destination }) => {
    if (!source || !destination) return;

    const srcIndex = source.index;
    const destIndex = destination.index;

    // Do not replace itself
    if (srcIndex !== destIndex) {
      setAnswerInputState((prev) => {
        const nextState = [...prev];
        nextState.splice(srcIndex, 1);
        nextState.splice(destIndex, 0, prev[srcIndex]);

        return nextState;
      });
    }
  };

  return {
    answerInputState,
    changeValue,
    createItem,
    deleteItem,
    onDragItemEnd,
  };
};

export default useAnswerInput;
