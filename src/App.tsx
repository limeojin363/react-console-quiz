import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GitHubIcon from "./assets/images/github.svg";
import Description from "./components/description/Description";
import Quiz5 from "./components/quizzes/Quiz5";
import QuizTemplate from "./components/template/QuizTemplateNew";

const routes = [
  {
    path: "/",
    element: <Description />,
    view: "Home",
  },
  // {
  //   path: "/1",
  //   element: <Quiz1 />,
  //   view: "1",
  // },
  // {
  //   path: "/2",
  //   element: <Quiz2 />,
  //   view: "2",
  // },
  // {
  //   path: "/3",
  //   element: <Quiz3 />,
  //   view: "3",
  // },
  // {
  //   path: "/4",
  //   element: <Quiz4 />,
  //   view: "4",
  // },
  {
    path: "/5",
    element: <QuizTemplate quizComponentObject={Quiz5} />,
    view: "5",
  },
  // {
  //   path: "/6",
  //   element: <Quiz6 />,
  //   view: "6",
  // },
  // {
  //   path: "/7",
  //   element: <Quiz7 />,
  //   view: "7",
  // },
  // {
  //   path: "/8",
  //   element: <Quiz8 />,
  //   view: "8",
  // },
  // {
  //   path: "/9",
  //   element: <Quiz9 />,
  //   view: "9",
  // },
];

const LinksGeneratedFromRoute = () => {
  console.log(window.location.pathname);
  return (
    <div className="flex gap-2">
      {routes.map((route) => (
        <a
          key={route.path}
          href={route.path}
          className={
            "text-lg font-bold " +
            (window.location.pathname === route.path
              ? "text-gray-900"
              : "text-gray-500")
          }>
          {route.view}
        </a>
      ))}
    </div>
  );
};

const GitHubLink = () => (
  <a
    href="https://github.com/limeojin363/react-effect-state-quizzes"
    target="_blank"
    rel="noreferrer">
    <img src={GitHubIcon} alt="" width={40} />
  </a>
);

const App = () => {
  return (
    <div className="bg-gray-100 min-h-dvh relative">
      <header className="flex justify-between p-4 items-center bg-gray-200 gap-2">
        <LinksGeneratedFromRoute />
        <GitHubLink />
      </header>
      <main>
        <RouterProvider router={createBrowserRouter(routes)} />
      </main>
    </div>
  );
};

export default App;
