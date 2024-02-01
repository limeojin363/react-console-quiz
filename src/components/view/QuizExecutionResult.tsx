import { ExecutionResult } from "../../hooks/quiz/sub/useQuizCodeExecution";

const QuizExecutionResult = ({ result }: { result: ExecutionResult }) => {
  if (result.length === 0) return "정답을 확인합니다";

  return (
    <div className="flex flex-col gap-0.5 min-h-0 bg-slate-600 border-slate-600 border-2 flex-1">
      {result.map((item, i) => (
        <div className="bg-slate-100 p-1" key={i}>
          {item.value}
        </div>
      ))}
    </div>
  );
};

export default QuizExecutionResult;
