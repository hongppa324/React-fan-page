import React from "react";
import { Outlet } from "react-router-dom";
import Router from "shared/Router";

export default function App() {
  return (
    <>
      <Outlet />
      <Router />
    </>
  );
}
