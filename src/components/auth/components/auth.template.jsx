"use client";

import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const AuthTemplate = ({ children }) => {
  const pathname = usePathname();

  if (pathname === "/verify") {
    return (
      <section className="h-screen flex justify-center items-center">
        {children}
      </section>
    );
  }
 
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <Link href="/" className="fixed top-9 left-9">
        <button className="btnOutline lg:btnGhost lg:text-secondary-900 lg:hover:text-secondary-200 flex items-center gap-1">
          <ChevronLeft size={18} />
          back to homes
        </button>
      </Link>
      <section className="hidden lg:block bg-secondary-200 p-8">
        <Image
          src="/browsing.jpg"
          width={600}
          height={150}
          objectFit="cover"
          alt="Background image"
        />  
      </section>
      <section className="flex justify-center items-center">{children}</section>
    </main>
  );
};
