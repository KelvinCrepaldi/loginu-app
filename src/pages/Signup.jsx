import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { Link } from "react-router-dom";
import api from "../services/index.jsx";
import { useNavigate } from "react-router-dom";

import FormContainer from "../components/FormContainer.jsx";

const Signup = () =>{
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        name: yup.string().required("Por favor escreva seu nome.").min(2, "Nome precisa ter no minimo 2 caracteres."),
        email: yup.string().required("Por favor escreva seu e-mail.").email("Formato de e-mail inválido."),
        password: yup.string().required("Por favor escreva uma senha.").min(6, "Senha precisa ter no minimo 6 caracteres."),
        confirmPassword: yup.string().required("Por favor reescreva a senha.").oneOf([yup.ref('password'), null], "Confirmação de senha inválida, tente novamente.")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
      } = useForm({ resolver: yupResolver(formSchema) });

    const onSubmitFunction = (e) =>{

        const {name, email, password} = e;

        api.post(`user/`,{name, email, password}).then((res)=>{
            console.log(res)
            navigate("/dashboard")
        }).catch((error)=>{
            console.log(error)

        });

    }

    return (
        <section>
            <FormContainer>
                <form onSubmit={handleSubmit(onSubmitFunction)}>

                    <input placeholder="Nome de usuairo" {...register("name")}></input>
                    {errors.name?.message && (
                    <span className="error-message">{errors.name?.message}</span>
                    )}

                    <input placeholder="Email" {...register("email")}></input>
                    {errors.email?.message && (
                    <span className="error-message">{errors.email?.message}</span>
                    )}

                    <input type="password" placeholder="Senha"  {...register("password")}></input>
                    {errors.password?.message && (
                    <span className="error-message">{errors.password?.message}</span>
                    )}

                    <input type="password" placeholder="Repita a senha"  {...register("confirmPassword")}></input>
                    {errors.confirmPassword?.message && (
                    <span className="error-message">{errors.confirmPassword?.message}</span>
                    )}

                    <button type="submit">Criar conta</button>
                </form>
                
                <Link to="/login">já possui uma conta?</Link>
            </FormContainer>
        </section>
    )
}

export default Signup;