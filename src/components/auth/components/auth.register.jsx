"use client";

import Link from "next/link";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
  const { handleChangeRegisterData, handleSubmitRegisterData } = useRegister();

  return (
    <main className="w-[360px] space-y-8">
      <div className="space-y-2">
        <h3>Register</h3>
        <p>Hello! join as author</p>
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <input
            name="firstName"
            placeholder="john"
            onChange={handleChangeRegisterData}
          />
          <input
            name="lastName"
            placeholder="doe"
            onChange={handleChangeRegisterData}
          />
        </div>
        <input
          name="username"
          placeholder="username"
          onChange={handleChangeRegisterData}
        />
        <input
          name="email"
          placeholder="email@yours.com"
          onChange={handleChangeRegisterData}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChangeRegisterData}
        />
        <button className="w-full" onClick={handleSubmitRegisterData}>
          Register
        </button>
      </div>
      <p>
        Have an account ?{" "}
        <Link href="/login">
          <span className="link">Login</span>
        </Link>
      </p>
    </main>
  );
};
