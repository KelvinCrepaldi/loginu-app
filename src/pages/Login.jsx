import FormContainer from "../components/FormContainer.jsx";
import { Link } from "react-router-dom";

const Login = () =>{
    return (
        <section>
            <FormContainer>
                <form>
                    <input placeholder="Email"></input>
                    <input placeholder="password"></input>
                    <button>Login</button>
                </form>
                <Link to="/signup">Já tem uma conta?</Link>
            </FormContainer>
        </section>
    )
}

export default Login;