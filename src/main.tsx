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
import { AuthProvider } from "./hooks/useAuth.tsx";
import { LoginPage } from "./pages/LoginRegister/LoginPage.tsx";
import { LoginRegisterPageWrapper } from "./pages/LoginRegister/index.tsx";
import { RegisterPage } from "./pages/LoginRegister/RegisterPage.tsx";
import { ForgotPasswordPage } from "./pages/LoginRegister/ForgotPasswordPage.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store.ts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<MainPage />}></Route>
      <Route path="auth" element={<LoginRegisterPageWrapper />}>
        <Route index element={<LoginPage />} />
        <Route path="registrar" element={<RegisterPage />} />
        <Route path="esqueci-senha" element={<ForgotPasswordPage />} />
      </Route>
      <Route path="/roteiro-de-aula/novo" element={<ClassGuideCreatePage />}></Route>
      <Route path="/roteiro-de-aula/visualizar" element={<ClassGuideViewPage />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("app")!).render(
  <ReduxProvider store={store}>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </ReduxProvider>
);
