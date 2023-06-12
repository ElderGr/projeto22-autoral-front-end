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
  logout(): Promise<void>;
};

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.JSX.Element }) {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loading, setLoading] = useState(true)

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

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    user: currentUser,
    signUp,
    signIn,
    logout
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
