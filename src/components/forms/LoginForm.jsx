import React, { useState } from "react";
import supabase from "../../supabase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../../assets/styles/SignupLogin.module.css";
import { useTranslation } from "react-i18next";

const LoginForm = ({ setToken }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      console.log(data, "our data");
      localStorage.setItem("username", data?.user?.user_metadata?.user_name);
      localStorage.setItem("token", JSON.stringify(data.session.access_token));

      setToken(data.session.access_token);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={style.formBox}>
      <h2>{t("loginSignup.login")}</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className={style.loginSignup}>
          {t("loginSignup.login")}
        </button>
      </form>
      <p>
        {t("loginSignup.haveNotAccount")}{" "}
        <Link to="/signup">{t("loginSignup.signup")}</Link>
      </p>
    </div>
  );
};

export default LoginForm;
