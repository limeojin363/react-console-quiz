export type AnswerItemHandlers = {
  createItem: () => void;
  deleteItem: (id: string) => void;
  updateItemValue: (id: string, value: string) => void;
};

export type TUserAnswerItem = {
  id: string;
  value: string;
  itemCompareStatus: AnswerItemCompareStatus;
};

export type AnswerItemCompareStatus = "AWAITING" | "CORRECT" | "INCORRECT";

export type QuizOverallStatus =
  | "INPUTTING"
  | "COMPARING"
  | "CORRECT"
  | "INCORRECT";
