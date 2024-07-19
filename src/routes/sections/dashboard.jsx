import { lazy, Suspense } from "react";

import { Outlet } from "react-router-dom";
import AuthGuard from "../../auth/guard/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";

const HomePage = lazy(() => import("../../pages/dashboard/Home"));

export const dashboardRoutes = [
  {
    path: "dashboard",
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <h1>Dashboard Profile</h1>,
      },
    ],
  },
];
