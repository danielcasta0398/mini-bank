import { useRoutes } from "react-router-dom";

import { authRoutes } from "./auth";
import { dashboardRoutes } from "./dashboard";

const Router = () => {
  return useRoutes([
    // Auth Routes
    ...authRoutes,

    // Dashboard Routes
    ...dashboardRoutes,
  ]);
};

export default Router;
