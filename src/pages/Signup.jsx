import { Link } from "react-router-dom";
const Signup = () =>{
    return (
        <section>
            <input placeholder="Nome de usuairo"></input>
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            <input placeholder="Repita a senha"></input>
            <button>Criar conta</button>
            <Link to="/login">já possui uma conta?</Link>
        </section>
    )
}

export default Signup;