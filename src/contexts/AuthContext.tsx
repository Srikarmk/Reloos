"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const AUTH_KEY = "reloos-logged-in";

type AuthContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContextValue = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem(AUTH_KEY) === "true";
    setIsLoggedIn(stored);
    setMounted(true);
  }, []);

  const login = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(AUTH_KEY, "true");
      setIsLoggedIn(true);
    }
  }, []);

  const logout = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(AUTH_KEY);
      setIsLoggedIn(false);
    }
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <AuthContextValue.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContextValue.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContextValue);
  if (!ctx) {
    return {
      isLoggedIn: false,
      login: () => {},
      logout: () => {},
    };
  }
  return ctx;
}
