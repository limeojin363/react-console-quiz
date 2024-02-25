import { useEffect, useState } from "react";
import { QuizComponentObject } from "../quizTemplate/QuizTemplate";

const code = `const [count, setCount] = useState(0);

useEffect(() => {
  if (count < 3) {
    setCount((prev) => prev + 1);
    console.log("hello");

    return () => console.log("bye");
  }

  return () => console.log("ㅋㅋ");
}, [count]);

useEffect(() => {
  const timer = setTimeout(() => {
    setCount(100);
  }, 1000);

  return () => {
    clearTimeout(timer);
  };
}, []);`;

const Quiz9: QuizComponentObject = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 3) {
      setCount((prev) => prev + 1);
      console.log("hello");

      return () => console.log("bye");
    }

    return () => console.log("ㅋㅋ");
  }, [count]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(100);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
};

Quiz9.code = code;

export default Quiz9;
