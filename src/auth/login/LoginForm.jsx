import React from "react";
import { useRouter } from "next/router";
import { Box, TextField, Button, CardMedia } from "@mui/material";
import logo from "../../../public/ccript-logo.jpg";
import { Formik, Form, Field } from "formik";

const LoginForm = () => {
  const router = useRouter();
  const handleFormSubmit = (values) => {
    console.log("values", values);
    router.push("/main");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "10%",
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleFormSubmit}
      >
        <Form style={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ maxHeight: "50%", maxWidth: "50%" }}>
            <img src={logo.src} />
          </Box>
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="Enter your username"
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="filled"
                sx={{ mb: 2 }}
                type={"email"}
                color="success"
              />
            )}
          />

          <Field
            type="text"
            id="password"
            name="password"
            placeholder="Enter your password"
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                variant="filled"
                sx={{ mb: 5 }}
                type={"text"}
                color="success"
              />
            )}
          />
          <Button type="submit" variant="contained" color="success">
            Sign In
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginForm;
