"use client"
import React, { useContext, useEffect, useState } from "react";
import { auth } from "@/firebase";
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = React.createContext<AuthContextType | null>(null);

type AuthContextType = {
  user: User | null | undefined;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
};

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.JSX.Element }) {
  const [currentUser, setCurrentUser] = useState<User | null>();

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  function signIn(email: string, password: string) {
    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    user: currentUser,
    signUp,
    signIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
