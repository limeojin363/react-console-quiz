import S from "./QuizTemplate.style";
import CodeView from "../view/CodeView";
import AnswerInput from "../answer/AnswerInput";
import CodeExecutionResult from "../view/QuizExecutionResult";
import useQuizState from "../../hooks/quiz/useQuizState";
import { Button } from "../ui/button";
import AnswerCheck from "../answer/AnswerCheck";

export type QuizComponentObject = {
  (): null;
  code: string;
};

const BottomLeftInner = ({
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

const BottomRightInner = ({
  quizStatus,
  executionResult,
  executeCode,
}: Pick<
  ReturnType<typeof useQuizState>,
  "quizStatus" | "executionResult" | "executeCode"
>) => (
  <>
    <Button disabled={quizStatus !== "INPUTTING"} onClick={executeCode}>
      정답 확인하기
    </Button>
    {quizStatus !== "INPUTTING" && (
      <CodeExecutionResult result={executionResult} />
    )}
  </>
);

type QuizTemplateProps = { quizComponentObject: QuizComponentObject };

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
        <S.TopArea>
          <CodeView code={quizComponentObject.code} />
        </S.TopArea>
        <S.BottomArea>
          <S.BottomLeftArea>
            <BottomLeftInner
              {...{
                answerInputObject,
                quizStatus,
                checkedAnswerItems,
                isOverallTrue,
              }}
            />
          </S.BottomLeftArea>
          <S.BottomRightArea>
            <BottomRightInner
              {...{ executeCode, executionResult, quizStatus }}
            />
          </S.BottomRightArea>
        </S.BottomArea>
      </S.Root>
      {/* Quiz component mount */}
      {quizComponentObject()}
    </>
  );
};

export default QuizTemplate;
