import { AnswerCheckedItem } from "../../hooks/quiz/sub/useAnswerCheck";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import S from "./Answer.style";

const AnswerCheckItem = ({
  answerCheckItem,
}: {
  answerCheckItem: AnswerCheckedItem;
}) => {
  const { compare } = answerCheckItem;
  const borderColor = { AWAITING: "grey", INCORRECT: "red", CORRECT: "blue" }[
    compare
  ];

  return (
    <S.ItemInner borderColor={borderColor}>
      <div tabIndex={-1}>끌기</div>
      <Input disabled value={answerCheckItem.value} />
      <Button disabled tabIndex={-1}>
        삭제
      </Button>
    </S.ItemInner>
  );
};

export default AnswerCheckItem;
