import { PropsWithChildren, createContext, useContext, useState } from "react";
import resolveAfter from "../utils/resolveAfter";
import { useEffectOnce } from "./useEffectOnce";
import { User } from "../api/User";
import { api } from "../api/api";

/**
 * Código inspirado em https://stackoverflow.com/a/68694612
 */

const Persistence = {
  getToken: () => localStorage.getItem("token") ?? "",
  setToken: (token: string) => localStorage.setItem("token", token),
  logout: () => localStorage.clear()
};

interface AuthContext {
  user: User | null;
  token: string;
  loginStatus: "LOGGED_OUT" | "LOGGED_IN" | "PENDING";
  login: (token: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, updateToken] = useState<AuthContext["token"]>("");
  const [user, updateUser] = useState<AuthContext["user"]>(null);
  const [loginStatus, updateLoginStatus] = useState<AuthContext["loginStatus"]>("LOGGED_OUT");

  const value: AuthContext = {
    user: user,
    token: token,
    loginStatus: loginStatus,
    login: async (token: string) => {
      updateLoginStatus("PENDING");

      // API call to /login or whatever to get our user object
      await resolveAfter(4000 * (Math.random() + 0.1));

      // Has login failed?
      const _error = true;
      if (_error) {
        updateLoginStatus("LOGGED_OUT");
        updateUser(null);
        return false;
      }

      updateLoginStatus("LOGGED_IN");
      updateToken(token);
      updateUser(user);
      Persistence.setToken(token);

      return true;
    },
    logout: () => {
      updateLoginStatus("LOGGED_OUT");
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
