export const authRoutes = [
  {
    path: "auth",

    children: [
      {
        path: "login",
        element: <h1>Login</h1>,
      },
    ],
  },
];
