import React, { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    login("juan@gmail.com", "123456");
  };

  return <div>LoginPage</div>;
};

export default LoginPage;
