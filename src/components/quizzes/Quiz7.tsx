import { useEffect, useState } from "react";
import useLogger from "../../hooks/logger/useLogger";
import QuizTemplate from "../template/QuizTemplate";

const code = `const [a, setA] = useState(1);

useEffect(() => {
  setA(2);
  log(a);
}, [log, a]);

useEffect(() => {
  setA(3);
  log(a);
}, [log, a]);`;

const Quiz7 = () => {
  const { log, show, result, isLogShow } = useLogger();
  const [a, setA] = useState(1);

  useEffect(() => {
    setA(2);
    log(a);
  }, [log, a]);

  useEffect(() => {
    setA(3);
    log(a);
  }, [log, a]);

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
