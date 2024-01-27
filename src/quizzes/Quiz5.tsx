import { useEffect, useState } from "react";
import useLog from "./useLog";
import QuizTemplate from "../template/QuizTemplate";

const code = `// clean-up은 실행이 될까?
useEffect(() => {
  if (a > 20)
    return () => {
      console.log(a);
    };

  console.log(a);
  setA((prev) => prev * 2);
}, [a, setA]);`;

const Quiz5 = () => {
  const { show, result, isLogShow } = useLog();
  const [a, setA] = useState(1);

  // clean-up은 실행이 될까?
  useEffect(() => {
    if (a > 20)
      return () => {
        console.log(a);
      };

    console.log(a);
    setA((prev) => prev * 2);
  }, [a, setA]);

  return (
    <QuizTemplate
      {...{
        code,
        isLogShow,
        result,
        show,
      }}
    />
  );
};

export default Quiz5;
