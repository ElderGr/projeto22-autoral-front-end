"use client"
import React from 'react'

function AuthInput(AuthInputProps: AuthInputProps) {
  const {name, changeHandler, type} = AuthInputProps;
  const minLength = {
    name: 3,
    text: 3,
    email: 6,
    password: 6
  }
  return (
    <div className="w-full">
            <div className="lg:text-lg text-md text-gray-600 pb-2 text-page-black">{name}</div>
            <input ref={changeHandler} type={type} name={name} minLength={minLength[type]} className="appearance-none block w-full px-3 py-2 h-14 border border-none rounded-md text-md placeholder-page-black shadow-md" />
    </div>
  )
}

interface AuthInputProps {
  name: string,
  changeHandler: React.MutableRefObject<HTMLInputElement | null>,
  type: "email" | "password" | "text" | "name"
}

export default AuthInput