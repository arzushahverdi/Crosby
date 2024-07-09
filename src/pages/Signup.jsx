import React, { useState } from "react";
import supabase from "../supabase";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            user_name: form.username,
          },
        },
      });
      if (error) throw error;
      alert("Signup failed");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" onChange={handleChange} />
        <input type="email" placeholder="Email" onChange={handleChange} />
        <input type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
      Already you have account ? <Link to="/login">Login</Link>
    </div>
  );
};

export default Signup;
