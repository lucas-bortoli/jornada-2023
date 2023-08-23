import { App } from "./app.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { MainPage } from "./components/MainPage/index.tsx";
import "./index.css";
import { ErrorPage } from "./components/ErrorPage/index.tsx";
import { ClassGuidePage } from "./components/ClassGuidePage/index.tsx";
import { render } from "react-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<MainPage />}></Route>
      <Route path="/roteiro-de-aula" element={<ClassGuidePage />}></Route>
    </Route>
  )
);

render(<RouterProvider router={router}></RouterProvider>, document.getElementById("app")!);
