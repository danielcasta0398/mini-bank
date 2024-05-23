import LoginPage from "../../pages/LoginPage";

export const authRoutes = [
  {
    path: "auth",

    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];
