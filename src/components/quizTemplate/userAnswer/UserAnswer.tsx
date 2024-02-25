import S from "./Answer.style";
import { Button, ButtonProps } from "../../ui/button";
import {
  TUserAnswerItem,
  type AnswerItemHandlers,
  QuizOverallStatus,
} from "./UserAnswer.type";
import UserAnswerItem from "./UserAnswerItem";

export type UserAnswerProps = {
  items: TUserAnswerItem[];
  itemHandlers: AnswerItemHandlers;
  quizOverallStatus: QuizOverallStatus;
};

const UserAnswer = ({
  items,
  itemHandlers,
  quizOverallStatus,
}: UserAnswerProps) => {
  const itmesWrapperBorderColor = {
    INPUTTING: "black",
    COMPARING: "black",
    INCORRECT: "red",
    CORRECT: "blue",
  }[quizOverallStatus];

  const isManipulationEnabled = quizOverallStatus === "INPUTTING";

  const addButtonProps: ButtonProps = {
    onClick: isManipulationEnabled ? itemHandlers.createItem : () => {},
    disabled: !isManipulationEnabled,
  };

  return (
    <S.AnswerRoot>
      <Button {...addButtonProps}>+</Button>
      <S.ItemsWrapper borderColor={itmesWrapperBorderColor}>
        {items.map((item, i) => (
          <UserAnswerItem
            key={i}
            {...item}
            {...itemHandlers}
            isManipulationEnabled={isManipulationEnabled}
          />
        ))}
      </S.ItemsWrapper>
    </S.AnswerRoot>
  );
};

export default UserAnswer;
