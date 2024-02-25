import { useEffect, useState } from "react";
import { QuizComponentObject } from "../quizTemplate/QuizTemplate";

const code = `const [num, setNum] = useState(0);

useEffect(() => {
  console.log(num);
  setNum(1);

  return () => {
    console.log(-1);
  };
}, [setNum, num]);`;

const Quiz1: QuizComponentObject = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log(num);
    setNum(1);

    return () => {
      console.log(-1);
    };
  }, [setNum, num]);

  return null;
};

Quiz1.code = code;

export default Quiz1;
