const ROOTS = {
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
};

export const paths = {
  // AUTH
  auth: {
    login: `${ROOTS.AUTH}/login`,
  },

  // DASHBOARD
  dashboard: {
    home: `${ROOTS.DASHBOARD}/home`,
    profile: `${ROOTS.DASHBOARD}/profile`,
  },
};
