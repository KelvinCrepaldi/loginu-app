import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { Link } from "react-router-dom";
import api from "../services/index.jsx";
import { useNavigate } from "react-router-dom"

import FormContainer from "../components/FormContainer.jsx";

const Login = () =>{

    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        email: yup.string().required("Por favor escreva seu e-mail.").email("Formato de e-mail inválido."),
        password: yup.string().required("Por favor escreva uma senha.").min(6, "Senha precisa ter no minimo 6 caracteres."),
    });

    const {register, handleSubmit, formState: {errors}, resetField } = useForm({resolver: yupResolver(formSchema)})

    const onSubmitFunction = (e) =>{

        const {email, password } = e;

        api.post(`user/login`,{email, password}).then((res)=>{
            console.log(res.data.token)
            localStorage.setItem("loginuKey", res.data.token)
            navigate("/dashboard")
            
        }).catch((error)=>{
            console.log(error)

        });

    }

    return (
        <section>
            <FormContainer>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
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