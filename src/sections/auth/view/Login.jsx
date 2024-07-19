import * as Yup from "yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// CONTEXT
import { AuthContext } from "../../../auth/context/AuthContext";
import RHFTextField from "../../../components/hook-form/RHFTextField";
import RHFFormProvider from "../../../components/hook-form/RHFFormProvider";

const Login = () => {
  const { login } = useContext(AuthContext);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("El email es invalido")
      .required("El email es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "test@gmail",
      password: "12345678",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    login(data.email, data.password);
  });

  return (
    <Box>
      <RHFFormProvider onSubmit={onSubmit} methods={methods}>
        <Box display="flex" flexDirection="column" gap="15px">
          <RHFTextField name="email" />
          <RHFTextField name="password" type="password" />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </RHFFormProvider>
    </Box>
  );
};

export default Login;
