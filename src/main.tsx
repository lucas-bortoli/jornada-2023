import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import { App } from "./app.tsx";
import { ClassGuideCreatePage } from "./components/ClassGuideCreatePage/index.tsx";
import { ErrorPage } from "./components/ErrorPage/index.tsx";
import { MainPage } from "./components/MainPage/index.tsx";
import { theme } from "./theme.ts";
import { ClassGuideViewPage } from "./components/ClassGuideView/index.tsx";
import { ParameterTuningWindow } from "./components/ClassGuideView/ParameterTuning/index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<MainPage />}></Route>
      <Route path="/roteiro-de-aula/novo" element={<ClassGuideCreatePage />}></Route>
      <Route path="/roteiro-de-aula/visualizar" element={<ClassGuideViewPage />}>
        <Route path="/roteiro-de-aula/visualizar/ajustes" element={<ParameterTuningWindow />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("app")!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
