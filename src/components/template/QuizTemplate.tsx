// import { type ComponentProps } from "react";
// import useLog from "../../hooks/useLog";
// import CodeViewer from "../view/CodeView";
// import ResultView from "../view/ResultView";
// import { Button } from "../ui/button";
// import Answer from "../answer/UserAnswer";
// import styled from "styled-components";

// type TemplateMainProps = { children: React.ReactNode } & ComponentProps<
//   typeof CodeViewer
// >;

// const TemplateMain = ({ children, code }: TemplateMainProps) => (
//   <S.TemplateMainRoot>
//     <CodeViewer code={code} />
//     {children}
//   </S.TemplateMainRoot>
// );

// type QuizTemplateProps = ComponentProps<typeof CodeViewer> &
//   Omit<ReturnType<typeof useLog>, "log"> &
//   ComponentProps<typeof ResultView>;

// const QuizTemplate = ({ code, result, isLogShow, show }: QuizTemplateProps) => {
//   if (!isLogShow)
//     return (
//       <TemplateMain code={code}>
//         <Button onClick={show}>정답 확인</Button>
//         <Answer a={"afsd"} />
//       </TemplateMain>
//     );

//   return (
//     <TemplateMain code={code}>
//       <ResultView result={result} />
//     </TemplateMain>
//   );
// };

// export default QuizTemplate;

// const S = {
//   TemplateMainRoot: styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 16px;
//     padding: 8px;
//   `,
// };
