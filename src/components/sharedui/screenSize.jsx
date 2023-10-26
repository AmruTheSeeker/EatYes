"use client"

import React from "react";
import { useState, useEffect } from "react";
 
 
export const ScreenSize = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
      
  if (!isClient) return null;  
  return (
    <main>
      <div>{children}</div>
      <div className="fixed bottom-8 left-8">
        <div className="lg:hidden text-sm bg-secondary-950 text-secondary-50 w-12 h-12 rounded-full flex justify-center items-center">
          SM
        </div>
        <div className="hidden text-sm bg-secondary-950 text-secondary-50 w-12 h-12 rounded-full lg:flex xl:hidden justify-center items-center">
          LG
        </div>
        <div className="hidden xl:flex text-sm bg-secondary-950 text-secondary-50 w-12 h-12 rounded-full  justify-center items-center">
          XL
        </div>
      </div>
    </main>
  );
};
