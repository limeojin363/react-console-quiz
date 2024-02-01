// import { useEffect, useState } from "react";
// import useLog from "../../hooks/useLog";
// import QuizTemplate from "../template/QuizTemplate";

// const code = `const [a, setA] = useState(1);

// useEffect(() => {
//   if (a < 16) {
//     console.log(a);
//     setA((prev) => prev * 2);
//     console.log(a);
//     setA((prev) => prev * 2);
//     console.log(a);
//   }
// }, [a, setA]);`;

// const Quiz6 = () => {
//   const { show, result, isLogShow } = useLog();
//   const [a, setA] = useState(1);

//   useEffect(() => {
//     if (a < 16) {
//       console.log(a);
//       setA((prev) => prev * 2);
//       console.log(a);
//       setA((prev) => prev * 2);
//       console.log(a);
//     }
//   }, [a, setA]);

//   return (
//     <QuizTemplate
//       {...{
//         code,
//         isLogShow,
//         result,
//         show,
//       }}
//     />
//   );
// };

// export default Quiz6;
