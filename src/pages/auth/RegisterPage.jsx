import { Helmet } from "react-helmet-async";

// SECTIONS
import Register from "../../sections/auth/view/Register";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title> Registrarse </title>
      </Helmet>
      <Register />
    </>
  );
};

export default RegisterPage;
