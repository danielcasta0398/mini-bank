import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import TextField from "@mui/material/TextField";

const RHFTextField = ({ name }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TextField {...field} />}
    />
  );
};

export default RHFTextField;
