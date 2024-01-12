import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Description from "./components/description/Description";
import GitHubIcon from "./assets/images/github.svg";

const Quiz1 = lazy(() => import("./components/quizzes/Quiz1"));
const Quiz2 = lazy(() => import("./components/quizzes/Quiz2"));
const Quiz3 = lazy(() => import("./components/quizzes/Quiz3"));
const Quiz4 = lazy(() => import("./components/quizzes/Quiz4"));
const Quiz5 = lazy(() => import("./components/quizzes/Quiz5"));
const Quiz6 = lazy(() => import("./components/quizzes/Quiz6"));

const routes = [
  {
    path: "/",
    element: <Description />,
    view: "Home",
  },
  {
    path: "/1",
    element: <Quiz1 />,
    view: "1",
  },
  {
    path: "/2",
    element: <Quiz2 />,
    view: "2",
  },
  {
    path: "/3",
    element: <Quiz3 />,
    view: "3",
  },
  {
    path: "/4",
    element: <Quiz4 />,
    view: "4",
  },
  {
    path: "/5",
    element: <Quiz5 />,
    view: "5",
  },
  {
    path: "/6",
    element: <Quiz6 />,
    view: "6",
  },
];

const LinksGeneratedFromRoute = () => (
  <div className="flex gap-2">
    {routes.map((route) => (
      <a
        key={route.path}
        className="font-bold text-lg text-gray-800"
        href={route.path}>
        {route.view}
      </a>
    ))}
  </div>
);

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
