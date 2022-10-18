import { Link } from "react-router-dom";
import { HomeSection } from "../styles/Home.styles";
const Home = () =>{
    return (
        <HomeSection>
            
            <div className="links-user">
                <Link to="/signup">Criar Conta</Link>
                <Link to="/login">Logar</Link>
            </div>
           

            <div className="home-text">
                <h1>Loginu-app</h1>
                <p>
                    Esta página, foi criada em React, com o objetivo de mostrar um simples sistema de autenticação, 
                    usando react-hook-form, yup, hookform/resolvers, todos os componentes foram criados com styled-components.
                </p>
                <p>
                    É possivel criar uma conta, fazer login e deletar a própria conta.
                </p>
                <p>
                    Ao fazer login, a página redireciona o usuário direto para o "Dashboard" uma página qualquer que deve aparecer 
                    ao fazer o login, nesse caso o dashboard possui uma lista com todos os usuários, apenas como demonstração.
                </p>
                <p>
                    Não é possivel acessar o dashboard sem ter feito uma autenticação, caso a tentativa ocorra, 
                    o usuário é redirecionado para a página de login.
                </p>

                

                <h1>Loginu-api</h1>
                <p>Uma API simples criada em Express.js, Bcrypt, jsonwebtoken, uuid. Que é capaz de armazenar contas de usuários e listar todos os usuários do banco de dados.</p>
                <p>O banco de dados dessa API é volátil, um array que é zerado toda vez que a aplicação reiniciar.</p>
                <p>Ao criar a conta pela primeira vez, a API retorna um token que pode ser usado para fazer o login automatico no sistema logo na criação, sem precisar fazer a autenticação do usuário.</p>
                <a className="repo-link" href="https://github.com/KelvinCrepaldi/loginu-app" target="_blank" rel="noreferrer"> Repositório da página</a>
                <a className="repo-link" href="https://github.com/KelvinCrepaldi/loginu-api" target="_blank" rel="noreferrer"> Repositório da API</a>
                
            </div>
        </HomeSection>
    )
}

export default Home;