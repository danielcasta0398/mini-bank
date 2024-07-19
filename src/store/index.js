import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth/auth.slice";

export default configureStore({
  reducer: {
    authState: authSlice,
  },
});
