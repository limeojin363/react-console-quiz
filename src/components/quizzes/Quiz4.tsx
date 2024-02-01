import { useEffect, useState } from "react";
import { QuizComponentObject } from "../template/QuizTemplate";

const code = `const [num, setNum] = useState(1);

useEffect(() => {
  if (num < 30) {
    setNum((prev) => prev * 2);
    setNum((prev) => prev * 2);
    console.log(num);
  }
}, [setNum, num]);`;

const Quiz4: QuizComponentObject = () => {
  const [num, setNum] = useState(1);

  useEffect(() => {
    if (num < 30) {
      setNum((prev) => prev * 2);
      setNum((prev) => prev * 2);
      console.log(num);
    }
  }, [setNum, num]);

  return null;
};

Quiz4.code = code;

export default Quiz4;
