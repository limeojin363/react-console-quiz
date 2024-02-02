// TODO: AnswerCheck와 합치는 방향으로 refactoring

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Button } from "../ui/button";
import AnswerInputItem from "./AnswerInputItem";
import S from "./Answer.style";
import useAnswerInput from "../../hooks/quiz/sub/useAnswerInput";

type AnswerInputProps = ReturnType<typeof useAnswerInput>;

const AnswerInput = ({
  changeValue,
  createItem,
  deleteItem,
  onDragItemEnd,
  answerInputState,
}: AnswerInputProps) => {
  const { length } = answerInputState;
  // react-beautiful-dnd에서 gap 사용이 불가능으로 인해(꼼수, 가능하다면 수정하기)..
  const listHeight = length * 56 + (length - 1) * 8;

  return (
    <S.AnswerRoot>
      <Button onClick={createItem}>+</Button>
      <DragDropContext onDragEnd={onDragItemEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <S.ItemsWrapper
              height={listHeight}
              ref={provided.innerRef}
              {...provided.droppableProps}>
              {answerInputState.map((item, index) => (
                <AnswerInputItem
                  {...item}
                  changeValue={changeValue}
                  deleteItem={deleteItem}
                  key={item.id}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </S.ItemsWrapper>
          )}
        </Droppable>
      </DragDropContext>
    </S.AnswerRoot>
  );
};

export default AnswerInput;
