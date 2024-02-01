import { useEffect, useState } from "react";
import { QuizComponentObject } from "../template/QuizTemplate";

const code = `const [num, setNum] = useState(1);

useEffect(() => {
  if (num < 30) {
    setNum(num * 2);
    setNum(num * 2);
    console.log(num);
  }
}, [setNum, num]);`;

const Quiz3: QuizComponentObject = () => {
  const [num, setNum] = useState(1);

  useEffect(() => {
    if (num < 30) {
      setNum(num * 2);
      setNum(num * 2);
      console.log(num);
    }
  }, [setNum, num]);

  return null;
};

Quiz3.code = code;

export default Quiz3;
