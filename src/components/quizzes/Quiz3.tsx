import { useEffect, useState } from "react";
import useLogger from "../../hooks/logger/useLogger";
import QuizTemplate from "../template/QuizTemplate";

const code = `const [num, setNum] = useState(1);

useEffect(() => {
  if (num < 30) {
    setNum(num * 2);
    setNum(num * 2);
    log(num);
  }
}, [setNum, log, num]);
`;

const Quiz3 = () => {
  const { log, show, result, isShow } = useLogger<number>();
  const [num, setNum] = useState(1);

  useEffect(() => {
    if (num < 30) {
      setNum(num * 2);
      setNum(num * 2);
      log(num);
    }
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

export default Quiz3;
