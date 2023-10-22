"use client";
import React from "react";
import { Avatar, Datepicker } from "flowbite-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center my-4">
      <div className="flex justify-between w-full">
        <div className="grid">
          <button
            className="px-3 py-1.5 bg-secondary-500 rounded-full"
            onClick={() => router.push("/account")}
          >
            <p className="text-center text-secondary-200">Today!</p>
          </button>
          <Datepicker className="max-w-[160px]" />
        </div>

        <div className="flex space-x-4">
          <div className="flex items-center">
            <Link
              href="/register"
              className="flex flex-col -space-y-2 justify-center"
            >
              <>
                <h5>Welcome,</h5>
                <h5>Guest</h5>
              </>
            </Link>
          </div>
          <Link href="/register">
            <Avatar rounded size="sm" />
          </Link>
        </div>
      </div>
    </div>
  );
};
