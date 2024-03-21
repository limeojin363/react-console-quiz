import S from "./UserAnswer.style";
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
  const itemsWrapperBorderColor = {
    INPUTTING: "transparent",
    COMPARING: "transparent",
    INCORRECT: "red",
    CORRECT: "blue",
  }[quizOverallStatus];

  const isManipulationEnabled = quizOverallStatus === "INPUTTING";

  const addButtonProps: ButtonProps = {
    type: "button",
    onClick: isManipulationEnabled ? itemHandlers.createItem : () => {},
    disabled: !isManipulationEnabled,
  };

  return (
    <S.UserAnswerRoot>
      <Button {...addButtonProps}>+</Button>
      <S.ListContainer borderColor={itemsWrapperBorderColor}>
        {items.map((item, i) => (
          <UserAnswerItem
            key={i}
            {...item}
            {...itemHandlers}
            isManipulationEnabled={isManipulationEnabled}
          />
        ))}
      </S.ListContainer>
    </S.UserAnswerRoot>
  );
};

export default UserAnswer;
