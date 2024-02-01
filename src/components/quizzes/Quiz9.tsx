// import { useEffect, useState } from "react";
// import useLog from "../../hooks/useLog";
// import QuizTemplate from "../template/QuizTemplate";

// const code = `const [count, setCount] = useState(0);

// useEffect(() => {
//   if (count < 3) {
//     setCount((prev) => prev + 1);
//     console.log("hello");

//     return () => console.log("bye");
//   }

//   return () => console.log("ㅋㅋ");
// }, [count]);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setCount(100);
//   }, 1000);

//   return () => {
//     clearTimeout(timer);
//   };
// }, []);`;

// const Quiz9 = () => {
//   const { show, result, isLogShow } = useLog();
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count < 3) {
//       setCount((prev) => prev + 1);
//       console.log("hello");

//       return () => console.log("bye");
//     }

//     return () => console.log("ㅋㅋ");
//   }, [count]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCount(100);
//     }, 1000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

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

// export default Quiz9;
