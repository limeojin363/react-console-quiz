import { MdOutlineDragIndicator } from "react-icons/md";
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
      <S.DragIconWrapper>
        <MdOutlineDragIndicator size={20} />
      </S.DragIconWrapper>
      <Input disabled value={answerCheckItem.value} />
      <Button disabled tabIndex={-1}>
        삭제
      </Button>
    </S.ItemInner>
  );
};

export default AnswerCheckItem;
