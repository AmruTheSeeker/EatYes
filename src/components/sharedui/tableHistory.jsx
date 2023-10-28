"use client";
import React from "react";
import { Avatar, Datepicker, Dropdown } from "flowbite-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import * as jose from "jose";

export const tableHistory = () => {
  const router = useRouter();
  const cookie = Cookies.get("eatyes-token");
  const token = JSON.parse(cookie);
  const dataUser = jose.decodeJwt(token);

  return (
    <div className="flex justify-center my-4">
      <h3>asd</h3>
    </div>
  );
};
