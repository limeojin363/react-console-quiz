import { ExecutionResult } from "../../hooks/quiz/sub/useQuizCodeExecution";
import S from "./View.style";

const QuizExecutionResult = ({ result }: { result: ExecutionResult }) => {
  if (result.length === 0) return "정답을 확인합니다";

  const { length } = result;
  // react-beautiful-dnd에서 gap 사용이 불가능으로 인해(꼼수, 가능하다면 수정하기)..
  const listHeight = length * 56 + (length - 1) * 8;

  return (
    <S.ERoot>
      <S.ExecutionItemsWrapper height={listHeight}>
        {result.map((item, i) => (
          <S.ExecutionItemContainer key={i}>
            {item.value}
          </S.ExecutionItemContainer>
        ))}
      </S.ExecutionItemsWrapper>
    </S.ERoot>
  );
};

export default QuizExecutionResult;
