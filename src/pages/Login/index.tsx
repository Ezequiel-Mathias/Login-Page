import React from "react";
import Input from "../../components/Input";

const Login: React.FC = () => {

    return (
        <div className="container-login">

            <div className="container-image">
                <img src="https://firebasestorage.googleapis.com/v0/b/pagelogin-67e39.appspot.com/o/word.svg?alt=media&token=4f81e864-b87e-4eea-9e2e-bf22ee2a4ba7" alt="" />
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
                            <img src="https://firebasestorage.googleapis.com/v0/b/pagelogin-67e39.appspot.com/o/google.svg?alt=media&token=8c34534a-1dc5-4188-91e3-c7505b40eef1"></img>
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

