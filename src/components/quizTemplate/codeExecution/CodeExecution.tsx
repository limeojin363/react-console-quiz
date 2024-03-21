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
    type: "submit",
    disabled: !isManipulationEnabled,
    onClick: isManipulationEnabled ? executeCode : () => {},
  };

  return (
    <S.CodeExecutionRoot>
      <Button {...answerCheckButtonProps}>정답 확인</Button>
      <S.ListContainer>
        {result.map((item, i) => (
          <S.ItemContainer key={i}>{item.value}</S.ItemContainer>
        ))}
      </S.ListContainer>
    </S.CodeExecutionRoot>
  );
};

export default CodeExecution;
