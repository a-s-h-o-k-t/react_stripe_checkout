import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { MainLayout } from "../layouts";

const Dashboard = lazy(() => import("../screens/Dashboard/Dashboard"));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Navigate to="stripe-payment-dashboard" replace />,
    },
    {
      path: "stripe-payment-dashboard",
      element: <Dashboard />,
    },
  ],
};

export default MainRoutes;
