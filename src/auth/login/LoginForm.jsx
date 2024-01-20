import React from "react";
import { Box, TextField, Button, CardMedia } from "@mui/material";
import logo from "../../../assets/ccript-logo.jpg";

const LoginForm = () => {
    
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "20%",
      }}
    >
      <Box component="img" alt="CCript Logo" src={logo} />
      <CardMedia image={logo} />
      <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
        jkdsfjglj
        <TextField
          label="Email"
          variant="filled"
          sx={{ mb: 2 }}
          type={"email"}
          color="success"
        />
        <TextField
          label="Password"
          variant="filled"
          sx={{ mb: 5 }}
          type={"password"}
          color="success"
        />
        <Button variant="contained" color="success">
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
