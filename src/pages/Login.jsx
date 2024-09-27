import React from "react";
import LoginForm from "../components/forms/LoginForm";

const Login = ({ setToken }) => {
  return (
    <div>
      <LoginForm setToken={setToken} />
    </div>
  );
};

export default Login;
