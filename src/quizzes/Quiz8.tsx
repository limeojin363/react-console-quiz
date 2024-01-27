import { useEffect, useState } from "react";
import useLog from "./useLog";
import QuizTemplate from "../template/QuizTemplate";

const code = `const [count, setCount] = useState(0);

useEffect(() => {
  if (count < 3) {
    setCount((prev) => prev + 1);
    console.log("hello");
  }

  return () => console.log("bye");
}, [count]);`;

const Quiz8 = () => {
  const { show, result, isLogShow } = useLog();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 3) {
      setCount((prev) => prev + 1);
      console.log("hello");
    }

    return () => console.log("bye");
  }, [count]);

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

export default Quiz8;
