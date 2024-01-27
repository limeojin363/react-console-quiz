import { useEffect, useState } from "react";
import useLog from "./useLog";
import QuizTemplate from "../template/QuizTemplate";

const code = `const [num, setNum] = useState(0);

useEffect(() => {
  console.log(num);
  setNum(1);

  return () => {
    console.log(-1);
  };
}, [setNum, num]);`;

const Quiz1 = () => {
  const { show, result, isLogShow } = useLog();
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log(num);
    setNum(1);

    return () => {
      console.log(-1);
    };
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

export default Quiz1;
