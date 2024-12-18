import { useState, useEffect } from "react";

import CustomInput from "../components/inputs/CustomInput.jsx";
import InputPassword from "../components/inputs/InputPassword.jsx";
import InputVerified from "../components/inputs/InputVerifiedField.jsx";

import MaskedInput from "../components/inputs/InputMask.jsx";

import isValidCPF from "../utils/validarCpf.jsx";
import isValidCNPJ from "../utils/validarCnpj.jsx";
import isValidEmail from "../utils/validarEmail.jsx";
import isValidSenha from "../utils/validarSenha.jsx";

import "../styles/styleRegistro.css";

const ScreenRegister = () => {
  const [pwd, setPwd] = useState("");
  const [pwdMatch, setPwdMatch] = useState("");

  const [isValidPwd, setValidPwd] = useState(false);

  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [valid, setValid] = useState(false);

  const isValidMatch = (pwdMatch) => {
    return pwd && pwdMatch && isValidSenha(pwd) && pwd === pwdMatch;
  };

  function handleSubmit(event) {
    event.preventDefault();

    if(!valid){
        return "";
    }else{
      
    }
  }

  useEffect(() => {
    setValid(
      isValidEmail(email) &&
        isValidCNPJ(cnpj) &&
        isValidCPF(cpf) &&
        isValidMatch(pwdMatch)
    );
  }, [pwd, pwdMatch]);

  return (
    <section className="registro-container">
      <h2 className="form-title">Cadastrar Novo Usuário</h2>
      <form action="#" className="registro-form" onSubmit={handleSubmit}>
        <InputVerified
          icon="account_circle"
          name="CPF"
          value={cpf}
          setValue={(e) => setCpf(e.target.value)}
          Input={MaskedInput}
          legenda="Seu CPF: 000.000.000-00"
          validar={isValidCPF}
        />
        <InputVerified
          icon="apartment"
          name="CNPJ"
          value={cnpj}
          setValue={(e) => setCnpj(e.target.value)}
          Input={MaskedInput}
          legenda="Seu CNPJ: 00.000.000/0000-00"
          validar={isValidCNPJ}
        />
        <InputVerified
          icon="mail"
          name="email"
          value={email}
          setValue={(e) => setEmail(e.target.value)}
          Input={CustomInput}
          legenda="Insira um e-mail válido no formato: nome@dominio.com. Certifique-se de incluir uma '@' e um domínio válido, como '.com' ou '.org'."
          validar={isValidEmail}
        />
        <InputVerified
          icon="lock"
          name="senha"
          value={pwd}
          setValue={(e) => setPwd(e.target.value)}
          Input={InputPassword}
          legenda={`Sua senha deve conter entre 4 e 24 caracteres, com pelo menos uma letra
            maiúscula e minúscula, um número e um desses caracteres especiais ! @ #
            $ %`}
          validar={isValidSenha}
        />
        <InputVerified
          icon="lock"
          name="confirmar senha"
          value={pwdMatch}
          setValue={(e) => setPwdMatch(e.target.value)}
          Input={InputPassword}
          legenda="As senhas devem ser iguais"
          validar={isValidMatch}
        />
        <button type="submit" className="registro-button" disabled={!valid}>
          Cadastrar
        </button>
        <p className="signup-text">
          Já tem uma conta? <a href="#/login">Logue agora</a>
        </p>
      </form>
    </section>
  );
};

export default ScreenRegister;
