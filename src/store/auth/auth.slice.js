import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    counter: 20,
    name: "juan",
  },
  reducers: {
    setAuth: (state, action) => {
      const keys = Object.keys(action.payload);
      keys.forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
