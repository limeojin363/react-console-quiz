import useQuizState from "../../hooks/quiz/useQuizState";
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
  const borderColor = {
    AWAITING: "grey",
    INCORRECT: "red",
    CORRECT: "blue",
  }[isOverallTrue];

  return (
    <S.ItemsWrapper borderColor={borderColor} height={300}>
      {checkedAnswerItems.map((answerCheckItem, i) => (
        <AnswerCheckItem key={i} answerCheckItem={answerCheckItem} />
      ))}
    </S.ItemsWrapper>
  );
};

export default AnswerCheck;
