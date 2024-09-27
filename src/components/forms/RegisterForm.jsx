import React, { useState } from "react";
import supabase from "../../supabase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../../assets/styles/SignupLogin.module.css";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleChange = (e) => {
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
      localStorage.setItem("username", form.username);
      localStorage.setItem("email", form.email);
      localStorage.setItem("password", form.password);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={style.formBox}>
      <h2>{t("loginSignup.signup")}</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder={t("loginSignup.username")}
          name="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder={t("loginSignup.email")}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder={t("loginSignup.password")}
          name="password"
          onChange={handleChange}
        />
        <button type="submit">{t("loginSignup.signup")}</button>
      </form>
      <p>
        {t("loginSignup.haveAccount")}{" "}
        <Link to="/login">{t("loginSignup.login")}</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
