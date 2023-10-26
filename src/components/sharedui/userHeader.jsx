"use client";
import React from "react";
import { Avatar, Datepicker } from "flowbite-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const UserHeader = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center my-4">
      <div className="flex justify-between w-full">
        <div className="grid gap-2">
          <button
            className="px-3 py-1.5 bg-secondary-500 rounded-full"
            onClick={() => router.push("/account")}
          >
            <p className="text-center text-secondary-200">Today!</p>
          </button>
          <Datepicker className="max-w-[160px]" />
        </div>

        <div className="flex space-x-4">
          <div className="flex items-center mt-[-40px]">
            <Link
              href="/register"
              className="flex flex-col -space-y-2 justify-center"
            >
              <>
                <h6 className="font-bold">Welcome,</h6>
                <h6 className="font-bold">Doraemon</h6>
              </>
            </Link>
          </div>
          <Link href="/register">
            <Avatar img="/doraemonhead.png" rounded size="lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};
