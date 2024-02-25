import { useEffect, useState } from "react";
import { QuizComponentObject } from "../quizTemplate/QuizTemplate";

const code = `const [a, setA] = useState(1);

useEffect(() => {
  if (a < 16) {
    console.log(a);
    setA((prev) => prev * 2);
    console.log(a);
    setA((prev) => prev * 2);
    console.log(a);
  }
}, [a, setA]);`;

const Quiz6: QuizComponentObject = () => {
  const [a, setA] = useState(1);

  useEffect(() => {
    if (a < 16) {
      console.log(a);
      setA((prev) => prev * 2);
      console.log(a);
      setA((prev) => prev * 2);
      console.log(a);
    }
  }, [a, setA]);

  return null;
};

Quiz6.code = code;

export default Quiz6;
