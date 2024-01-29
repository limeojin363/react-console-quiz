import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { Button } from "../ui/button";
import AnswerInputItem from "./AnswerInputItem";
import S from "./Answer.style";
import useAnswerState from "../../hooks/useAnswerState";

type AnswerInputProps = { a: string };

const Answer = ({ a }: AnswerInputProps) => {
  const { addNewItem, answerState, setAnswerState, changeValue, deleteItem } =
    useAnswerState();

  const onDragEnd: OnDragEndResponder = ({ source, destination }) => {
    if (!source || !destination) return;

    const srcIndex = source.index;
    const destIndex = destination.index;

    // Do not replace itself
    if (srcIndex !== destIndex) {
      setAnswerState((prev) => {
        const nextState = [...prev];
        nextState.splice(srcIndex, 1);
        nextState.splice(destIndex, 0, prev[srcIndex]);

        return nextState;
      });
    }
  };

  return (
    <S.AnswerRoot>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <S.AnswerInputItemsWrapper
              height={answerState.length * 48}
              ref={provided.innerRef}
              {...provided.droppableProps}>
              {answerState.map((item, index) => (
                <AnswerInputItem
                  {...item}
                  changeValue={changeValue}
                  deleteItem={deleteItem}
                  key={item.id}
                  index={index}
                />
              ))}
            </S.AnswerInputItemsWrapper>
          )}
        </Droppable>
      </DragDropContext>
      <Button onClick={addNewItem} />
    </S.AnswerRoot>
  );
};

export default Answer;
