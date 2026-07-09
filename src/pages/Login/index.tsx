import React from "react";
import Input from "../../components/Input";
import google from "../../assets/google.png";
import presentation from "../../assets/presentation.png";

const Login: React.FC = () => {

    return (
        <div className="container-login">

            <div className="container-image">
                <img src={presentation} alt="" />
            </div>

            <div className="container-log-in">

                <div className="container-fill-in-login">

                    <div className="container-instructions">
                        <p>Bem vindo de volta</p>
                        <h1>Faça login na sua conta</h1>
                    </div>

                    <div className="container-inputs">
                        <Input info="E-mail" placeholder="exemplo@gmail.com" />
                        <Input info="Senha" placeholder="0123456789" />
                    </div>

                    <div className="container-forgot-password">
                        <div className="remember-me">
                            <input type="radio"></input>
                            <span>Lembre de mim</span>
                        </div>
                        <span>Esqueceu a senha?</span>
                    </div>

                    <div className="button">
                        <span>Entrar na conta</span>
                    </div>

                    <div className="container-login-google">
                        <div className="button">
                            <img src={google} alt=""></img>
                            <span>Ou faça login com o Google</span>
                        </div>
                    </div>

                    <div className="register">
                        <p>Não tem uma conta?</p><span>Cadastre-se</span>
                    </div>
                </div>

                
            </div>

        </div>
    )
}


export default Login

