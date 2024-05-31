import { useContext } from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// CONTEXT
import { AuthContext } from "../../../auth/context/AuthContext";
import RHFTextField from "../../../components/hook-form/RHFTextField";
import RHFFormProvider from "../../../components/hook-form/RHFFormProvider";

const Login = () => {
  const { login } = useContext(AuthContext);

  const methods = useForm();

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Box>
      <RHFFormProvider onSubmit={onSubmit} methods={methods}>
        <RHFTextField name="email" />
      </RHFFormProvider>
    </Box>
  );
};

export default Login;
