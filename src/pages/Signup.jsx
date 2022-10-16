import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer.jsx";
const Signup = () =>{
    return (
        <section>
            <FormContainer>
                <form>
                    <input placeholder="Nome de usuairo"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Senha"></input>
                    <input placeholder="Repita a senha"></input>
                    <button>Criar conta</button>
                </form>
                
                <Link to="/login">já possui uma conta?</Link>
            </FormContainer>
        </section>
    )
}

export default Signup;