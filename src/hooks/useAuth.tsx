import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import resolveAfter from "../utils/resolveAfter";
import { useEffectOnce } from "./useEffectOnce";

/**
 * Código inspirado em https://stackoverflow.com/a/68694612
 */

const Persistence = {
  getToken: () => localStorage.getItem("token") ?? "",
  setToken: (token: string) => localStorage.setItem("token", token),
  logout: () => localStorage.clear()
};

enum LoginStatus {
  LOGGED_OUT = "LOGGED_OUT",
  LOGGED_IN = "LOGGED_IN",
  PENDING = "PENDING"
}

interface User {
  firstName: string;
}

interface AuthContext {
  user: User | null;
  token: string;
  loginStatus: LoginStatus;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, updateToken] = useState<AuthContext["token"]>("");
  const [user, updateUser] = useState<AuthContext["user"]>(null);
  const [loginStatus, updateLoginStatus] = useState<AuthContext["loginStatus"]>(
    LoginStatus.LOGGED_OUT
  );

  const value: AuthContext = {
    user: user,
    token: token,
    loginStatus: loginStatus,
    login: async (token: string) => {
      updateLoginStatus(LoginStatus.PENDING);

      // API call to /login or whatever to get our user object
      await resolveAfter(4000 * (Math.random() + 0.1));

      const user: User = { firstName: "Lucas" };

      updateLoginStatus(LoginStatus.LOGGED_IN);
      updateToken(token);
      updateUser(user);
      Persistence.setToken(token);
    },
    logout: () => {
      updateLoginStatus(LoginStatus.LOGGED_OUT);
      updateUser(null);
      updateToken("");
      Persistence.logout();
    }
  };

  useEffectOnce(() => {
    const storedToken = Persistence.getToken();

    if (storedToken) {
      value.login(storedToken);
    }
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext)!;
