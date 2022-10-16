import { Link } from "react-router-dom";

const Login = () =>{
    return (
        <section>
            <input placeholder="Email"></input>
            <input placeholder="Email"></input>
            <button>Login</button>
            <Link to="/signup">Já tem uma conta?</Link>
        </section>
    )
}

export default Login;