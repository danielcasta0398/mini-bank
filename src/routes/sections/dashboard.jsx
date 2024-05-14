import { Outlet } from "react-router-dom";

export const dashboardRoutes = [
  {
    path: "dashboard",
    element: (
      <div>
        <div>Navbar</div>
        <Outlet />
        <div>Footer</div>
      </div>
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
