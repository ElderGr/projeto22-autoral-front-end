import AuthHeader from "@/components/AuthHeader";
import SignUp from "@/components/SignUp";
import React from "react";

export default function AuthSignUp() {
  return (
    <>
      <AuthHeader />
      <main className="flex min-h-screen flex-col items-center p-24 max-md:p-0 max-md:w-full justify-center">
        <SignUp />
      </main>
    </>
  );
}
