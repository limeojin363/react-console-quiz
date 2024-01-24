import { type ComponentProps } from "react";
import ResultView from "../view/ResultView";
import useLogger from "../../hooks/logger/useLogger";
import CodeViewer from "../view/CodeView";

type TemplateMainProps = { children: React.ReactNode } & ComponentProps<
  typeof CodeViewer
>;

const TemplateMain = ({ children, code }: TemplateMainProps) => (
  <div className="flex flex-col gap-8 p-4">
    <CodeViewer code={code} />
    {children}
  </div>
);

type QuizTemplateProps = ComponentProps<typeof CodeViewer> &
  Omit<ReturnType<typeof useLogger>, "log"> &
  ComponentProps<typeof ResultView>;

const QuizTemplate = ({ code, result, isLogShow, show }: QuizTemplateProps) => {
  if (!isLogShow)
    return (
      <TemplateMain code={code}>
        <button onClick={show} className="bg-gray-200 w-full p-4 text-gray-800">
          정답 확인
        </button>
      </TemplateMain>
    );

  return (
    <TemplateMain code={code}>
      <ResultView result={result} />
    </TemplateMain>
  );
};

export default QuizTemplate;
