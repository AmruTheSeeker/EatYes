"use client";

import Link from "next/link";
import React from "react";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { handleChangeLoginData, handleSubmitLoginData } = useLogin();

  return (
    <main className="w-[360px] space-y-8">
      <div className="space-y-2">
        <h3>Login</h3>
        <p>Welcome back, please do login</p>
      </div>
      <div className="space-y-2">
        <input
          name="email"
          placeholder="email@yours.com"
          onChange={handleChangeLoginData}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChangeLoginData}
        />
        <button className="w-full" onClick={handleSubmitLoginData}>
          Log In
        </button>
      </div>
      <p>
        Don't have an account ?{" "}
        <Link href="/register">
          <span className="link">Register</span>
        </Link>
      </p>
    </main>
  );
};
