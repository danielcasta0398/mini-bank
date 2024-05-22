import { useEffect, useReducer } from "react";
import { isValidToken } from "../utils";

const initialState = {
  user: null,
  loading: true,
};

const reducer = (state, action) => {
  if (action.type === "INITIAL") {
    return {
      ...state,
      user: action.payload,
    };
  }

  if (action.type === "LOGIN") {
    return {
      ...state,
      user: action.payload,
    };
  }

  if (action.type === "REGISTER") {
    return {
      ...state,
      user: action.payload,
    };
  }

  if (action.type === "LOGOUT") {
    return {
      ...state,
      user: null,
    };
  }
};

const STORAGE_KEY = "token";

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = () => {
    try {
      const token = localStorage.getItem(STORAGE_KEY);

      if (token && isValidToken(token)) {
        dispatch({
          type: "INITIAL",
          payload: {
            user: {
              ...user.data,
              token,
            },
          },
        });
      } else {
        dispatch({
          type: "INITIAL",
          payload: {
            user: null,
          },
        });
      }
    } catch (error) {}
  };

  useEffect(() => {
    initialize();
  }, [initialize]);

  return children;
};

export default AuthProvider;
