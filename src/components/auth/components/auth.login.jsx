"use client";

import Link from "next/link";
import React from "react";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { handleChangeLoginData, handleSubmitLoginData } = useLogin();

  return (
    <main className="w-[360px] space-y-8">
      <div className="space-y-2">
        <h3 className="font-bold text-4xl">Login</h3>
        <h4>Welcome back, please do login</h4>
      </div>
      <div className="space-y-2">
{/* // <<<<<<< API-register-and-login */}
        <input
          name="email"
          placeholder="email@yours.com"
          onChange={handleChangeLoginData}
          className="bg-secondary-200"
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChangeLoginData}
        />
        <button className="w-full text-secondary-200" onClick={handleSubmitLoginData}>
          Log In
        </button>
      </div>
      <div>
        Don't have an account ?{" "}
        <Link href="/register">
          <span className="link">Register</span>
        </Link>
      </div>
    </main>
  );
};
