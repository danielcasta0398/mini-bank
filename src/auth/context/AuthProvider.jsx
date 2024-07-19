import { useCallback, useEffect, useReducer } from "react";

import { AuthContext } from "./AuthContext";

// Hooks
import useRouter from "../../routes/hooks/useRouter";

// Utils
import { isValidToken, setSession } from "../utils";
import axiosInstance, { endpoints } from "../../utils/axios";

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
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const token = localStorage.getItem(STORAGE_KEY);

      if (token && isValidToken(token)) {
        setSession(token);

        const response = await axiosInstance.get(endpoints.auth.me);

        dispatch({
          type: "INITIAL",
          payload: {
            user: {
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
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = async (email, password) => {
    const data = {
      email,
      password,
    };

    const response = await axiosInstance.post(endpoints.auth.login, data);

    const { token } = response.data;

    setSession(token);

    dispatch({
      type: "LOGIN",
      payload: {
        user: {
          ...response.data,
          token,
        },
      },
    });

    router.replace("/dashboard/home");
  };

  // REGISTER
  const register = (email, password) => {
    const data = {
      email,
      password,
    };
  };

  // LOGOUT

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const methodsAuth = {
    user: {
      name: "juan",
      email: "juan@gmail.com",
    },
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={methodsAuth}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
