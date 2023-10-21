"use client";

import { Toaster } from "react-hot-toast";

export const RootProvider = ({ children }) => {
  return (
    <>
      <Toaster />
      <div>{children}</div>;
    </>
  );
};
