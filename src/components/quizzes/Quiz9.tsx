import { useEffect, useState } from "react";
import useLogger from "../../hooks/logger/useLogger";
import QuizTemplate from "../template/QuizTemplate";

const code = `const [count, setCount] = useState(0);

useEffect(() => {
  if (count < 3) {
    setCount((prev) => prev + 1);
    log("hello");

    return () => log("bye");
  }

  return () => log("ㅋㅋ");
}, [log, count]);

useEffect(() => {
  const timer = setTimeout(() => {
    setCount(100);
  });

  return () => {
    clearTimeout(timer);
  };
}, []);`;

const Quiz9 = () => {
  const { log, show, result, isLogShow } = useLogger();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 3) {
      setCount((prev) => prev + 1);
      log("hello");

      return () => log("bye");
    }

    return () => log("ㅋㅋ");
  }, [log, count]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(100);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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

export default Quiz9;
