import React, { useState } from "react";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });
      if (error) throw error;
      setToken(data);
      navigate("/shop");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={handleChange} />
        <input type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      You don't have any account ? <link to="/signup">Sign up</link>
    </div>
  );
};

export default Login;
