"use client"
import React from "react";
import Link from "next/link";
import { Button, Avatar } from "flowbite-react";

export const Header = () => {
  return (
    <header>
      <Button pill color="success">
        Today!
      </Button> 
        <Avatar rounded />
    
    </header>
  );
};
