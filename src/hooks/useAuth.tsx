import { PropsWithChildren, createContext, useContext, useState } from "react";
import { useEffectOnce } from "./useEffectOnce";

/**
 * Código inspirado em https://stackoverflow.com/a/68694612
 */

const Persistence = {
  getToken: () => localStorage.getItem("token") ?? "",
  setToken: (token: string) => localStorage.setItem("token", token),
  logout: () => localStorage.clear()
};

interface AuthContext {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, updateToken] = useState<AuthContext["token"]>("");

  const value: AuthContext = {
    token: token,
    setToken: async (token: string) => {
      Persistence.setToken(token);
      updateToken(token);

      return true;
    },
    logout: () => {
      Persistence.logout();
      updateToken(null);
    }
  };

  useEffectOnce(() => {
    const storedToken = Persistence.getToken();

    if (storedToken) {
      value.setToken(storedToken);
    }
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext)!;
