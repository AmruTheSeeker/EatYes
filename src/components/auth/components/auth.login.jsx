import Link from "next/link";
import React from "react";

export const Login = () => {
  return (
    <main className="w-[360px] space-y-8">
      <div className="space-y-2">
        <h3>Login</h3>
        <p>Welcome back, please do login</p>
      </div>
      <div className="space-y-2">
        <input name="email" placeholder="email@yours.com" />
        <input name="password" type="password" placeholder="password" />
        <button className="w-full">Log In</button>
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
