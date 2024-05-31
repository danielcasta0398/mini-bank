import { useContext } from "react";
import { Helmet } from "react-helmet-async";

// CONTEXT
import { AuthContext } from "../../auth/context/AuthContext";

const RegisterPage = () => {
  const { login } = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    login("juan@gmail.com", "123456");
  };

  return (
    <>
      <Helmet>
        <title> Registrarse </title>
      </Helmet>
    </>
  );
};

export default RegisterPage;
