"use client"
import React from "react";
import { Button, Avatar, Datepicker, Tooltip } from "flowbite-react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <header>
      <div className="asolute m-8 mb-2 p-4 text-center max-w-[500px] mx-auto mt-8">
        <div className="absolute top-5 left-5">
          <Button
            pill
            color="success"
            className="m-8 p-1"
            onClick={() => router.push("/account")}
          >
            Today!
          </Button>
          <Datepicker className="max-w-[200px]" />
        </div>

        <div className="absolute top-5 right-5 flex space-x-4">
          <div>
            <h5 style={{ fontSize: "30px" }}>Welcome,</h5>
            <h5 style={{ fontSize: "30px" }}>Guest</h5>
          </div>
          <Avatar rounded size="lg" />
        </div>
      </div>
    </header>
  );
};
