import { useEffect, useState } from "react";
import useLogger from "../../hooks/logger/useLogger";
import QuizTemplate from "../template/QuizTemplate";

const code = `const [count, setCount] = useState(0);

useEffect(() => {
  if (count < 3) {
    setCount((prev) => prev + 1);
    log("hello");
  }

  return () => log("bye");
}, [log, count]);`;

const Quiz8 = () => {
  const { log, show, result, isLogShow } = useLogger();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 3) {
      setCount((prev) => prev + 1);
      log("hello");
    }

    return () => log("bye");
  }, [log, count]);

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
