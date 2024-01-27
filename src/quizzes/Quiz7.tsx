import { useEffect, useState } from "react";
import useLogger from "./useLog";
import QuizTemplate from "../template/QuizTemplate";

const code = `const [a, setA] = useState(1);

useEffect(() => {
  setA(2);
  console.log(a);
}, [a]);

useEffect(() => {
  setA(3);
  console.log(a);
}, [a]);`;

const Quiz7 = () => {
  const { show, result, isLogShow } = useLogger();
  const [a, setA] = useState(1);

  useEffect(() => {
    setA(2);
    console.log(a);
  }, [a]);

  useEffect(() => {
    setA(3);
    console.log(a);
  }, [a]);

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

export default Quiz7;
