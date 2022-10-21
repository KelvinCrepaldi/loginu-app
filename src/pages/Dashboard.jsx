import { DashBoardContainer } from "../styles/Dashboard.styles.jsx";
import { useContext, useEffect } from "react";
import { UserContext } from "../providers/user/index.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () =>{

    const { isLogged, setIsLogged, usersList } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(()=>{
        if(!isLogged){
            navigate("/login")
        }
    },[])


    return(<section>
        <DashBoardContainer>
            <h2>Dashboard: Users List</h2>
            <p>Banco de dados volátil iniciado dia: xxxx, podendo sofrer reset a qualquer momento.</p>
            <ul>
                {usersList.map((user, key)=>{
                    return <li key={key}>Name: {user.name}</li>
                })}
            </ul>
            <button onClick={()=>{
                localStorage.removeItem("token");
                setIsLogged(false);
                navigate("/");
            }}>Desconectar</button>
            <button>Deletar conta</button>
        </DashBoardContainer>
    </section>)
}
export default Dashboard;