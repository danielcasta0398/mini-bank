import { Outlet } from "react-router-dom";
import AuthGuard from "../../auth/guard/AuthGuard";

export const dashboardRoutes = [
  {
    path: "dashboard",
    element: (
      <AuthGuard>
        <div>Navbar</div>
        <Outlet />
        <div>Footer</div>
      </AuthGuard>
    ),
    children: [
      {
        path: "home",
        element: <h1>Dashboard Home</h1>,
      },
      {
        path: "profile",
        element: <h1>Dashboard Profile</h1>,
      },
    ],
  },
];
