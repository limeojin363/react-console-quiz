import { useEffect, useRef } from "react";
import { QuizComponentObject } from "../quizTemplate/QuizTemplate";

const code = `const ref = useRef<number>(0);

useEffect(() => {
  if (ref.current < 5) {
    console.log(ref.current);
    ref.current += 1;
  }
}, [ref]);
`;

const Quiz10: QuizComponentObject = () => {
  const ref = useRef<number>(0);

  useEffect(() => {
    if (ref.current < 5) {
      console.log(ref.current);
      ref.current += 1;
    }
  }, [ref]);

  return null;
};

Quiz10.code = code;

export default Quiz10;
