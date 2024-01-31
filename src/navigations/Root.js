import React from "react";
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
