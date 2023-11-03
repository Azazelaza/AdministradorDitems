import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { DashboardRoutes } from "./routes/DashboardRoutes.jsx";
import { AuthRoutes } from "./routes/AuthRoutes.jsx";
import Loading from "../components/ui/Loading.jsx";
import { useDispatch, useSelector } from "react-redux";
import { checkUserLogin, startLogOut } from "../redux/authSlice/thunk.js";

export const RouterApp = () => {
  const dispatch = useDispatch();
  const { checking, status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status == "not-auth" && !!localStorage.getItem("token")) {
      dispatch(checkUserLogin());
    } else {
      dispatch(startLogOut());
    }
  }, []);

  if (checking) {
    return <Loading />;
  }

  if (status == "auth") {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
          <Route path="/" element={<Navigate to="/dashboard/" />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AuthRoutes />} />

          <Route path="/dashboard/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
  }
};
