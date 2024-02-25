import { ExecutionResult } from "../../../hooks/quiz/sub/useQuizCodeExecution";
import { Button, ButtonProps } from "../../ui/button";
import { QuizOverallStatus } from "../userAnswer/UserAnswer.type";
import S from "./CodeExecution.style";

export type CodeExecutionProps = {
  executeCode: () => void;
  result: ExecutionResult;
  quizOverallStatus: QuizOverallStatus;
};

const CodeExecution = ({
  executeCode,
  result,
  quizOverallStatus,
}: CodeExecutionProps) => {
  const isManipulationEnabled = quizOverallStatus === "INPUTTING";

  const answerCheckButtonProps: ButtonProps = {
    onClick: isManipulationEnabled ? executeCode : () => {},
    disabled: !isManipulationEnabled,
  };

  return (
    <S.Root>
      <Button {...answerCheckButtonProps}>정답 확인</Button>
      <S.ExecutionItemsWrapper height={40}>
        {result.map((item, i) => (
          <S.ExecutionItemContainer key={i}>
            {item.value}
          </S.ExecutionItemContainer>
        ))}
      </S.ExecutionItemsWrapper>
    </S.Root>
  );
};

export default CodeExecution;
