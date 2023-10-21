import Link from "next/link";
import React from "react";

export const Login = () => {
  return (
    <main className="w-[360px] space-y-8">
      <div className="space-y-2">
        <h3 className="font-bold text-4xl">Login</h3>
        <h4>Welcome back, please do login</h4>
      </div>
      <div className="space-y-2">
        <input name="email" placeholder="email@yours.com" className="bg-secondary-200"/>
        <input name="password" type="password" placeholder="password" />
        <button className="w-full text-secondary-200">Log In</button>
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
