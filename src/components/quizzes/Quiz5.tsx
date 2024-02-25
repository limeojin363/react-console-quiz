import { useEffect, useState } from "react";
import { QuizComponentObject } from "../quizTemplate/QuizTemplate";

const code = `const [a, setA] = useState(1);

// clean-up은 실행이 될까?
useEffect(() => {
  if (a > 20)
    return () => {
      console.log(a);
    };

  console.log(a);
  setA((prev) => prev * 2);
}, [a, setA]);`;

const Quiz5: QuizComponentObject = () => {
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

  return null;
};

Quiz5.code = code;

export default Quiz5;
