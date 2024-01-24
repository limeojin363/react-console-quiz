import { useEffect, useState } from "react";
import useLogger from "../../hooks/logger/useLogger";
import QuizTemplate from "../template/QuizTemplate";

const code = `// clean-up function은 실행이 될까?
useEffect(() => {
  if (a > 20)
    return () => {
      log(a);
    };

  log(a);
  setA((prev) => prev * 2);
}, [a, setA, log]);
`;

const Quiz5 = () => {
  const { log, show, result, isLogShow } = useLogger();
  const [a, setA] = useState(1);

  // clean-up은 실행이 될까?
  useEffect(() => {
    if (a > 20)
      return () => {
        log(a);
      };

    log(a);
    setA((prev) => prev * 2);
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

export default Quiz5;
