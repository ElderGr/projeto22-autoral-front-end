"use client";
import React, { useRef, useState, FormEvent } from "react";
import AuthInput from "./AuthInput";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FirebaseError } from "firebase/app";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const username = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const signUp = useAuth()!.signUp;
  const { push } = useRouter();
  const user = useAuth()?.user;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      toast.error("Os campos de senhas precisam ser iguais");
      return;
    }
    try {
      if (!emailRef.current?.value || !passwordRef.current?.value)
        return toast.error("Os campos email e senhas precisam ser preenchidos");
      await signUp(emailRef.current.value, passwordRef.current.value);
      push("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error("Não foi possível criar a sua conta");
      } else {
        alert(error);
        console.log(error);
      }
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center lg:w-2/3 lg:max-w-[660px] sm:w-9/12 sm:max-w-9/12 max-sm:w-660px bg-page-green z-10 p-10 rounded-sm shadow-lg">
        <div className="py-4 text-5xl text-page-white">Cadastre-se</div>
        <div className="flex flex-col w-full lg:max-w-[660px] ">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-6"
          >
            <AuthInput name="username" changeHandler={username} type="name" />
            <AuthInput name="email" changeHandler={emailRef} type="email" />
            <AuthInput
              name="password"
              changeHandler={passwordRef}
              type="password"
            />
            <AuthInput
              name="confirmPassword"
              changeHandler={confirmPasswordRef}
              type="password"
            />
            <button
              disabled={loading}
              className="flex items-center justify-center py-4 bg-page-white text-page-green font-bold w-full rounded-xl"
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
        <button
          disabled={loading}
          className="py-4 text-lg text-page-white hover:underline"
        >
          <Link href="/auth/signin">
            Já possui casdastro? Então clique aqui para acessar
          </Link>
        </button>
      </div>
    </>
  );
}
