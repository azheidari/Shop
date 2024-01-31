import React from "react";
import { Outlet } from "react-router-dom";
import ElectronicsMainNavigation from "./ElectronicsMainNavigation";

const ElectronicsRootLayout = () => {
  return (
    <div>
      <ElectronicsMainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ElectronicsRootLayout;
