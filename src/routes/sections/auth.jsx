import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const LoginPage = lazy(() => import("../../pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../../pages/auth/RegisterPage"));

export const authRoutes = [
  {
    path: "auth",
    element: (
      <Suspense fallback={<h1>Loading....</h1>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
];
