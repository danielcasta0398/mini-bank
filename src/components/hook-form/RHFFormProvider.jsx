import { FormProvider } from "react-hook-form";

import Box from "@mui/material/Box";

const RHFFormProvider = ({ children, onSubmit, methods }) => {
  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={onSubmit}>
        {children}
      </Box>
    </FormProvider>
  );
};

export default RHFFormProvider;
