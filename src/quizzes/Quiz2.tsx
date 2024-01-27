import { useEffect, useState } from "react";
import useLog from "./useLog";
import QuizTemplate from "../template/QuizTemplate";

const code = `const [num, setNum] = useState(1);

useEffect(() => {
  if (num < 30) {
    setNum((prev) => prev * 2);
    console.log(num);
  }
}, [setNum, num]);`;

const Quiz2 = () => {
  const { show, result, isLogShow } = useLog();
  const [num, setNum] = useState(1);

  useEffect(() => {
    if (num < 30) {
      setNum((prev) => prev * 2);
      console.log(num);
    }
  }, [setNum, num]);

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

export default Quiz2;
