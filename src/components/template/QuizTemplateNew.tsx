import S from "./QuizTemplateNew.style";
import CodeView from "../view/CodeView";
import AnswerInput from "../answer/AnswerInput";
import CodeExecutionResult from "../view/QuizExecutionResult";
import useQuizState from "../../hooks/quiz/useQuizState";
import { Button } from "../ui/button";
import AnswerCheck from "../answer/AnswerCheck";

export type QuizObject = {
  (): null;
  code: string;
};

const BottomLeft = ({
  quizStatus,
  answerInputObject,
  checkedAnswerItems,
  isOverallTrue,
}: Pick<
  ReturnType<typeof useQuizState>,
  "quizStatus" | "answerInputObject" | "isOverallTrue" | "checkedAnswerItems"
>) =>
  quizStatus === "INPUTTING" ? (
    <AnswerInput {...answerInputObject} />
  ) : (
    <AnswerCheck
      checkedAnswerItems={checkedAnswerItems}
      isOverallTrue={isOverallTrue}
    />
  );

const BottomRight = ({
  quizStatus,
  executionResult,
  executeCode,
}: Pick<
  ReturnType<typeof useQuizState>,
  "quizStatus" | "executionResult" | "executeCode"
>) =>
  quizStatus === "INPUTTING" ? (
    <Button onClick={executeCode}>123123</Button>
  ) : (
    <CodeExecutionResult result={executionResult} />
  );

type QuizTemplateProps = { quizComponentObject: QuizObject };

const QuizTemplate = ({ quizComponentObject }: QuizTemplateProps) => {
  const {
    quizStatus,
    executionResult,
    answerInputObject,
    executeCode,
    checkedAnswerItems,
    isOverallTrue,
  } = useQuizState();

  return (
    <>
      <S.Root>
        <S.Top>
          <CodeView code={quizComponentObject.code} />
        </S.Top>
        <S.Bottom>
          <BottomLeft
            {...{
              answerInputObject,
              quizStatus,
              checkedAnswerItems,
              isOverallTrue,
            }}
          />
          <BottomRight {...{ executeCode, executionResult, quizStatus }} />
        </S.Bottom>
      </S.Root>
      {/* Quiz component mount */}
      {quizComponentObject()}
    </>
  );
};

export default QuizTemplate;
