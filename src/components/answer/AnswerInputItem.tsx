import { Draggable } from "react-beautiful-dnd";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
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
  changeValue,
  deleteItem,
  index,
}: AnswerInputItemProps) => {
  const onDelete = () => {
    deleteItem(id);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(id, e.target.value);
  };

  return (
    <Draggable index={index} draggableId={id}>
      {(provided) => (
        <S.DraggableInner
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <div tabIndex={-1}>끌기</div>
          <Input id={id} value={value} onChange={onChange} />
          <Button tabIndex={-1} onClick={onDelete}>
            삭제
          </Button>
        </S.DraggableInner>
      )}
    </Draggable>
  );
};

export default AnswerInputItem;
