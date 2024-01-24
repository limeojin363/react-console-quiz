import { useEffect, useState } from "react";
import useLogger from "../../hooks/logger/useLogger";
import QuizTemplate from "../template/QuizTemplate";

const code = `const [a, setA] = useState(1);

useEffect(() => {
  if (a < 16) {
    log(a);
    setA((prev) => prev * 2);
    log(a);
    setA((prev) => prev * 2);
    log(a);
  }
}, [a, setA, log]);
`;

const Quiz6 = () => {
  const { log, show, result, isLogShow } = useLogger();
  const [a, setA] = useState(1);

  useEffect(() => {
    if (a < 16) {
      log(a);
      setA((prev) => prev * 2);
      log(a);
      setA((prev) => prev * 2);
      log(a);
    }
  }, [a, setA, log]);

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

export default Quiz6;
