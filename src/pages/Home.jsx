import { Link } from "react-router-dom";
const Home = () =>{
    return (
        <section>
            <h1> LOGINU.APP</h1>

            <Link to="/signup">Criar Conta</Link>
            <Link to="/login">Logar</Link>
        </section>
    )
}

export default Home;