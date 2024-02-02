import { Draggable } from "react-beautiful-dnd";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MdOutlineDragIndicator } from "react-icons/md";
import S from "./Answer.style";

type AnswerInputItemProps = {
  id: string;
  value: string;
  index: number;
  deleteItem: (id: string) => void;
  changeValue: (id: string, value: string) => void;
};

const AnswerInputItem = ({
  id,
  value,
  index,
  changeValue,
  deleteItem,
}: AnswerInputItemProps) => {
  const onDelete = () => {
    deleteItem(id);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(id, e.target.value);
  };

  return (
    <Draggable index={index} draggableId={id}>
      {(provided) => (
        <S.ItemInner
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <S.DragIconWrapper>
            <MdOutlineDragIndicator size={20} />
          </S.DragIconWrapper>
          <Input id={id} value={value} onChange={onChangeInput} />
          <Button tabIndex={-1} onClick={onDelete}>
            삭제
          </Button>
        </S.ItemInner>
      )}
    </Draggable>
  );
};

export default AnswerInputItem;
