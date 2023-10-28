"use client";
import React from "react";
import { Avatar, Datepicker } from "flowbite-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as jose from "jose";
import Cookies from "js-cookie";

export const UserHeader = () => {
  const router = useRouter();
  const cookie = Cookies.get("eatyes-token");
  const token = JSON.parse(cookie);
  const dataUser = jose.decodeJwt(token);

  return (
    <div className="flex justify-center my-4">
      <div className="flex justify-between w-full">
        <div className="grid gap-2">
          <button
            className="px-3 py-1.5 bg-secondary-500 rounded-full"
            onClick={() => router.push("/dashboard/user")}
          >
            <h4 className="text-center text-secondary-200">
              Back to Dashboard
            </h4>
          </button>
          <Datepicker className="max-w-[160px]" />
        </div>

        <div className="flex space-x-4">
          <div className="flex items-center mt-[-40px]">
            <div
              href="/dashboard/user"
              className="flex flex-col -space-y-2 justify-center"
            >
              <>
                <h6 className="font-bold">Welcome,</h6>
                <h6 className="font-bold">{dataUser.username}</h6>
              </>
            </div>
          </div>
          <div href="/dashboard/user">
            <Avatar img="/doraemonhead.png" rounded size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};
