"use client"
import React from "react";
import { Avatar, Datepicker} from "flowbite-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center ">
      <div className="absolute flex gap-[150px] top-[30px] bg-yellow-500 w-full">
        <button
          className="grid justify-center gap-4 bg-secondary-500 w-[180px] h-[50px] rounded-full"
          onClick={() => router.push("/account")}
        >
          <h2 className="text-center text-secondary-200">Today!</h2>
          <Datepicker className="max-w-[180px]" />
        </button>

        <div className="flex space-x-4">
          <div>
            <Link href="/register">
              <h5 style={{ fontSize: "30px" }}>Welcome,</h5>
              <h5 style={{ fontSize: "30px" }}>Guest</h5>
            </Link>
          </div>
          <Link href="/register">
            <Avatar rounded size="lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};
