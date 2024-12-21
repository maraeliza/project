import { useState, useEffect } from "react";

import InputField from "../components/inputs/InputField.jsx";
import InputMasked from "../components/inputs/InputMask.jsx";
import InputPassword from "../components/inputs/InputPassword.jsx";

import isValidCPF from "../utils/validarCpf.jsx";
import isValidCNPJ from "../utils/validarCnpj.jsx";
import isValidSenha from "../utils/validarSenha.jsx";

import "../styles/styleLogin.css";
import routes from "../utils/routes.json";
const LOGIN_ROUTE = routes.basePath + routes.loginUser;

const ScreenLogin = () => {
  const [cpf, setCpf] = useState("");
  const [cpfFocado, setCpfFocado] = useState(false);

  const [cnpj, setCnpj] = useState("");
  const [cnpjFocado, setCnpjFocado] = useState(false);

  const [pwd, setPwd] = useState("");
  const [pwdFocado, setPwdFocado] = useState(false);

  const [valid, setValid] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!valid) {
      return "";
    }
    var userDados = {
      cpf: cpf,
      cnpj: cnpj,
      senha: pwd,
    };

    try {
      const response = await fetch(LOGIN_ROUTE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDados),
      });
      console.log(response);
      if (response.status == 200) {
        const data = await response.json();
        if(data.auth){
          console.log(data.token)
          console.log("Usuário logado com sucesso!");
          window.location.href = '#/home';
        }       
      } else {
        console.log("Não foi possível logar!");
      }
    } catch (error) {
      console.error("Erro ao enviar dados para a API:", error);
    }
  }
  useEffect(() => {
    setValid(isValidCNPJ(cnpj) && isValidCPF(cpf) && isValidSenha(pwd));
  }, [pwd, cpf, cnpj]);

  return (
    <section className="login-container">
      <h2 className="form-title">LOGAR</h2>
      <form action="#" className="login-form" onSubmit={handleSubmit}>
        <InputField
          type="text"
          icon="account_circle"
          name="cnpj"
          setValue={(e) => setCnpj(e.target.value)}
          Input={InputMasked}
          setFocado={setCnpjFocado}
        />
        <InputField
          type="text"
          icon="account_circle"
          name="cpf"
          setValue={(e) => setCpf(e.target.value)}
          Input={InputMasked}
          setFocado={setCpfFocado}
        />
        <InputField
          icon="lock"
          name="senha"
          setValue={(e) => setPwd(e.target.value)}
          Input={InputPassword}
          setFocado={setPwdFocado}
        />

        <a href="#" className="forgot-pass-link">
          Esqueceu a senha?
        </a>
        <button type="submit" className="login-button" disabled={!valid}>
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
