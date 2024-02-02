// TODO: AnswerInput과 합치는 방향으로 refactoring

import useQuizState from "../../hooks/quiz/useQuizState";
import { Button } from "../ui/button";
import S from "./Answer.style";
import AnswerCheckItem from "./AnswerCheckItem";

type AnswerCheckProps = Pick<
  ReturnType<typeof useQuizState>,
  "isOverallTrue" | "checkedAnswerItems"
>;

const AnswerCheck = ({
  isOverallTrue,
  checkedAnswerItems,
}: AnswerCheckProps) => {
  const { length } = checkedAnswerItems;
  // react-beautiful-dnd에서 gap 사용이 불가능으로 인해(꼼수, 가능하다면 수정하기)..
  const listHeight = length * 56 + (length - 1) * 8;

  const borderColor = {
    AWAITING: "grey",
    INCORRECT: "red",
    CORRECT: "blue",
  }[isOverallTrue];

  return (
    <S.AnswerRoot>
      <Button onClick={() => {}} disabled>
        +
      </Button>
      <S.ItemsWrapper borderColor={borderColor} height={listHeight}>
        {checkedAnswerItems.map((answerCheckItem, i) => (
          <AnswerCheckItem key={i} answerCheckItem={answerCheckItem} />
        ))}
      </S.ItemsWrapper>
    </S.AnswerRoot>
  );
};

export default AnswerCheck;
