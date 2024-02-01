import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Button } from "../ui/button";
import AnswerInputItem from "./AnswerInputItem";
import S from "./Answer.style";
import useAnswerInput from "../../hooks/quiz/sub/useAnswerInput";

type AnswerInput = ReturnType<typeof useAnswerInput>;

const Answer = ({
  changeValue,
  createItem,
  deleteItem,
  onDragItemEnd,
  answerInputState,
}: AnswerInput) => {
  return (
    <S.AnswerRoot>
      <DragDropContext onDragEnd={onDragItemEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <S.ItemsWrapper
              height={answerInputState.length * 52}
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
            </S.ItemsWrapper>
          )}
        </Droppable>
      </DragDropContext>
      <Button onClick={createItem} />
    </S.AnswerRoot>
  );
};

export default Answer;
