import { Helmet } from "react-helmet-async";

import Login from "../../sections/auth/view/Login";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title> Inicio Sesión </title>
      </Helmet>
      <Login />
    </>
  );
};

export default LoginPage;
