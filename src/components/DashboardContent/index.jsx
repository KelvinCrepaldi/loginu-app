import { DashBoardContainer } from "./DashboardContent.styles";
import { useEffect, useState } from "react";
import api from "../../services";
import { useNavigate } from "react-router-dom";

const DashboardContent = () =>{

    const navigate = useNavigate();
    
    const [users, setUsers] = useState(["nenhum"])


    useEffect(()=>{
        api.get(`user`,{
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBpbmd1aW1AbWFpbC5jb20iLCJpYXQiOjE2NjYwNzU5OTEsImV4cCI6MTY2NjA3OTU5MX0.IOl2BpPapypHqZBNkoCXIcYKZESERLv17XmB-5GmUYs`
            }}
            ).then((res)=>{
                setUsers(res.data.users)
        }).catch((error)=>{
            console.log(error)

        });
    },[]);

    return(
        <DashBoardContainer>
            <h2>Dashboard: Users List</h2>
            <p>Banco de dados volátil iniciado dia: xxxx, podendo sofrer reset a qualquer momento.</p>
            <ul>
                {users.map((user, key)=>{
                    return <li key={key}>Name: {user.name}</li>
                })}
            </ul>
            <button onClick={()=>{
                localStorage.removeItem("loginuKey");
                navigate("/")
            }}>Desconectar</button>
            <button>Deletar conta</button>
        </DashBoardContainer>
    )
    
}

export default DashboardContent;