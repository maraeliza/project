import { useState, useEffect } from "react";

import InputField from "../components/inputs/InputField.jsx";
import InputMasked from "../components/inputs/InputMask.jsx";
import InputPassword from "../components/inputs/InputPassword.jsx";

import "../styles/styleLogin.css";
const ScreenLogin = () => {
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <section className="login-container">
      <h2 className="form-title">LOGAR</h2>
      <form action="#" className="login-form">
        <InputField
          type="text"
          icon="account_circle"
          name="cnpj"
          setValue={(e) => setCnpj(e.target.value)}
          Input={InputMasked}
        />
        <InputField
          type="text"
          icon="account_circle"
          name="cpf"
          setValue={(e) => setCpf(e.target.value)}
          Input={InputMasked}
        />
        <InputField
          icon="lock"
          name="senha"
          setValue={(e) => setPwd(e.target.value)}
          Input={InputPassword}
        />
      
        <a href="#" className="forgot-pass-link">
          Esqueceu a senha?
        </a>
        <button type="submit" className="login-button">
          Log in
        </button>
        <p className="signup-text">
          Não tem uma conta? <a href="#/registro">Cadastre-se agora</a>
        </p>
      </form>
    </section>
  );
};
export default ScreenLogin;
