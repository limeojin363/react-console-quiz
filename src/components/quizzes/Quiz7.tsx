import { useEffect, useState } from "react";
import { QuizComponentObject } from "../template/QuizTemplate";

const code = `const [a, setA] = useState(1);

useEffect(() => {
  setA(2);
  console.log(a);
}, [a]);

useEffect(() => {
  setA(3);
  console.log(a);
}, [a]);`;

const Quiz7: QuizComponentObject = () => {
  const [a, setA] = useState(1);

  useEffect(() => {
    setA(2);
    console.log(a);
  }, [a]);

  useEffect(() => {
    setA(3);
    console.log(a);
  }, [a]);

  return null;
};

Quiz7.code = code;

export default Quiz7;
