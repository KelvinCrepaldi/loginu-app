import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { Link } from "react-router-dom";
import api from "../services/index.jsx";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../providers/user/index.jsx";
import { useContext, useEffect } from "react";

import FormContainer from "../components/FormContainer.jsx";

const Login = () =>{

    const navigate = useNavigate();

    const {requestLogin,isLogged} = useContext(UserContext);


    useEffect(()=>{
        if(isLogged){
            navigate("/dashboard")
        }
    },[])


    const formSchema = yup.object().shape({
        email: yup.string().required("Por favor escreva seu e-mail.").email("Formato de e-mail inválido."),
        password: yup.string().required("Por favor escreva uma senha.").min(6, "Senha precisa ter no minimo 6 caracteres."),
    });

    const {register, handleSubmit, formState: {errors}, resetField } = useForm({resolver: yupResolver(formSchema)})

   
    const handleLogin = (e) =>{
        requestLogin(e);
        navigate('/dashboard')
    }

    return (
        <section>
            <FormContainer>
                <form onSubmit={handleSubmit(handleLogin)}>
                <input placeholder="Email" {...register("email")}></input>
                    {errors.email?.message && (
                    <span className="error-message">{errors.email?.message}</span>
                    )}

                    <input type="password" placeholder="Senha"  {...register("password")}></input>
                    {errors.password?.message && (
                    <span className="error-message">{errors.password?.message}</span>
                    )}
                    <button type="submit">Login</button>
                </form>
                <Link to="/signup">Criar uma conta!</Link>
            </FormContainer>
        </section>
    )
}

export default Login;