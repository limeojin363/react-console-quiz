import S from "./QuizTemplate.style";
import CodeView from "./codeView/CodeView";
import CodeExecutionResult, {
  CodeExecutionProps,
} from "./codeExecution/CodeExecution";
import useQuizState from "../../hooks/quiz/useQuizState";
import UserAnswer, { UserAnswerProps } from "./userAnswer/UserAnswer";

export type QuizComponentObject = {
  (): null;
  code: string;
};

type QuizTemplateProps = { quizComponentObject: QuizComponentObject };

const QuizTemplate = ({ quizComponentObject }: QuizTemplateProps) => {
  const {
    executeCode,
    executionResult,
    quizOverallStatus,
    answerItemHandlers,
    answerItems,
  } = useQuizState();

  const userAnswerProps: UserAnswerProps = {
    items: answerItems,
    itemHandlers: answerItemHandlers,
    quizOverallStatus,
  };

  const codeExecutionProps: CodeExecutionProps = {
    executeCode,
    result: executionResult,
    quizOverallStatus,
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCode();
  };

  return (
    <>
      <S.QuizTemplateRoot onSubmit={onSubmit}>
        <S.TopArea>
          <CodeView code={quizComponentObject.code} />
        </S.TopArea>
        <S.BottomArea>
          <S.BottomLeftArea>
            <UserAnswer {...userAnswerProps} />
          </S.BottomLeftArea>
          <S.BottomRightArea>
            <CodeExecutionResult {...codeExecutionProps} />
          </S.BottomRightArea>
        </S.BottomArea>
      </S.QuizTemplateRoot>
      {/* Quiz component mount */}
      {quizComponentObject()}
    </>
  );
};

export default QuizTemplate;
