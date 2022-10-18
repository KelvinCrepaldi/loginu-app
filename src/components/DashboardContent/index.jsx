import { DashBoardContainer } from "./DashboardContent.styles";

const DashboardContent = () =>{
    const data = [
        {
            "name": "Pinguim",
        },
        {
            "name": "Pinguim",
        },
        {
            "name": "Pinguim",
        },{
            "name": "Pinguim",
        }
    ]
    return(
        <DashBoardContainer>
            <h2>Dashboard: Users List</h2>
            <p>Banco de dados volátil iniciado dia: xxxx, podendo sofrer reset a qualquer momento.</p>
            <ul>
                {data.map((user)=>{
                    return <li>Name: {user.name}</li>
                })}
            </ul>
            <button>Desconectar</button>
            <button>Deletar conta</button>
        </DashBoardContainer>
    )
    
}

export default DashboardContent;