import { useEffect, useState } from "react";
import useLogger from "../../hooks/logger/useLogger";
import QuizTemplate from "../template/QuizTemplate";

const code = `const [num, setNum] = useState(0);

useEffect(() => {
  log(num);
  setNum(1);

  return () => {
    log(-1);
  };
}, [setNum, log, num]);
`;

const Quiz1 = () => {
  const { log, show, result, isShow } = useLogger<number>();
  const [num, setNum] = useState(0);

  useEffect(() => {
    log(num);
    setNum(1);

    return () => {
      log(-1);
    };
  }, [setNum, log, num]);

  return (
    <QuizTemplate
      {...{
        code,
        isShow,
        result,
        show,
      }}
    />
  );
};

export default Quiz1;
