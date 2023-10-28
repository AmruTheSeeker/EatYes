"use client";
import React from "react";
import { Avatar, Datepicker, Dropdown } from "flowbite-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import * as jose from "jose";

export const UserHeader = () => {
  const router = useRouter();
  const cookie = Cookies.get("eatyes-token");
  const token = JSON.parse(cookie);
  const dataUser = jose.decodeJwt(token);

  const logout = () => {
    Cookies.remove("eatyes-data");
    Cookies.remove("eatyes-token");
    router.push(`/login`);
  };

  return (
    <div className="flex justify-center my-4">
      <div className="flex justify-between w-full">
        <div className="grid gap-2">
          <button
            className="px-3 py-1.5 bg-secondary-500 rounded-full"
            onClick={() => router.push("/dashboard/user/histories")}
          >
            <h4 className="text-center text-secondary-200">Today!</h4>
          </button>
          <Datepicker className="max-w-[160px]" />
        </div>

        <div className="flex space-x-4">
          <div className="flex items-center mt-[-40px]">
            <div className="flex flex-col -space-y-2 justify-center">
              <>
                <h6 className="font-bold">Welcome,</h6>
                <h6 className="font-bold">{dataUser.username}</h6>
              </>
            </div>
          </div>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="/doraemonhead.png"
                rounded
                size="lg"
                className="bg-secondary-950"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{dataUser.username}</span>
              <span className="block truncate text-sm font-medium">
                {dataUser.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={logout}> Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
