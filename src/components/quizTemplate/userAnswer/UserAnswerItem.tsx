import { Button, ButtonProps } from "../../ui/button";
import { Input, InputProps } from "../../ui/input";
import S from "./UserAnswer.style";
import { AnswerItemHandlers, TUserAnswerItem } from "./UserAnswer.type";

type UserAnswerItemProps = TUserAnswerItem & {
  isManipulationEnabled: boolean;
} & Pick<AnswerItemHandlers, "updateItemValue" | "deleteItem">;

const UserAnswerItem = ({
  itemCompareStatus,
  id,
  value,
  isManipulationEnabled,
  updateItemValue,
  deleteItem,
}: UserAnswerItemProps) => {
  const itemValueHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateItemValue(id, e.target.value);

  const inputProps: InputProps = {
    value,
    disabled: !isManipulationEnabled,
    onChange: itemValueHandler,
  };

  const deleteButtonProps: ButtonProps = {
    type: "button",
    tabIndex: -1,
    disabled: !isManipulationEnabled,
    onClick: isManipulationEnabled ? () => deleteItem(id) : undefined,
  };

  const itemBorderColor = {
    AWAITING: "transparent",
    CORRECT: "blue",
    INCORRECT: "red",
  }[itemCompareStatus];

  return (
    <S.ItemContainer borderColor={itemBorderColor}>
      <Input {...inputProps} />
      <Button {...deleteButtonProps}>삭제</Button>
    </S.ItemContainer>
  );
};

export default UserAnswerItem;
