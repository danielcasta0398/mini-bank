import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

const RHFTextField = ({ name, type }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField type={type} {...field} />
          {error && <FormHelperText error>{error.message}</FormHelperText>}
        </>
      )}
    />
  );
};

export default RHFTextField;
