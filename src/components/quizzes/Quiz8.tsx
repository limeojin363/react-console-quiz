import { useEffect, useState } from "react";
import { QuizComponentObject } from "../quizTemplate/QuizTemplate";

const code = `const [count, setCount] = useState(0);

useEffect(() => {
  if (count < 3) {
    setCount((prev) => prev + 1);
    console.log("hello");
  }

  return () => console.log("bye");
}, [count]);`;

const Quiz8: QuizComponentObject = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 3) {
      setCount((prev) => prev + 1);
      console.log("hello");
    }

    return () => console.log("bye");
  }, [count]);

  return null;
};

Quiz8.code = code;

export default Quiz8;
