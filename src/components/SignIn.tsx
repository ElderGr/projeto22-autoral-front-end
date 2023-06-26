"use client";
import React, { useRef, FormEvent, useState, useEffect } from "react";
import AuthInput from "./AuthInput";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FirebaseError } from "firebase/app";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const signIn = useAuth()!.signIn;
  const user = useAuth()?.user;
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(user?.email) push("/");
  })

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      if (!emailRef.current?.value || !passwordRef.current?.value)
        return toast.error("Os campos email e senhas precisam ser preenchidos");
      await signIn(emailRef.current.value, passwordRef.current.value);
      push("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error("Senha ou email incorretos");
      } else {
        alert(error);
        console.log(error);
      }
    }
  }

  React.useEffect(() => {
    user && push('/')
  })
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center lg:w-2/3 lg:max-w-[660px] sm:w-9/12 sm:max-w-9/12 max-sm:w-660px bg-page-white z-10 p-10 rounded-sm shadow-lg">
        <div className="py-4 text-5xl text-page-black">{"Entre"}</div>
        <div className="flex flex-col w-full lg:max-w-[660px] ">
          <form
            action=""
            onSubmit={handleLogin}
            className="flex flex-col w-full gap-6"
          >
            {" "}
            <AuthInput name="email" changeHandler={emailRef} type="email" />
            <AuthInput
              name="password"
              changeHandler={passwordRef}
              type="password"
            />
            <button
              disabled={loading}
              className="flex items-center justify-center py-4 bg-page-black text-page-white font-bold w-full rounded-xl"
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
        <button
          disabled={loading}
          className="py-4 text-lg text-page-black hover:underline"
        >
          <Link href="/auth/signup">
            Ainda não possui casdastro? Então clique aqui para cadastrar-se
          </Link>
        </button>
      </div>
    </>
  );
}
