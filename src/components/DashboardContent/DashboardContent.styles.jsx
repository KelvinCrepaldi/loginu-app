import styled from "styled-components";

export const DashBoardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    ul{
        width: 300px;
        min-height: 300px;
        border-top: 3px solid #008552;
        padding: 10px;
        margin: 10px;
        background: rgb(0,0,0,0.5);
    }

    h2{
        font-size: 30px;
        margin: 20px;
    }

    button{
        width: 200px;
        height: 30px;
        margin: 5px;

        background: none;
        border: 2px solid #008552;
        border-radius: 5px;
        color: #00ff9d;
        background: rgb(0,0,0,0.5);
        transition: 0.1s;
        cursor: pointer;
    }

    button:hover{
        background: rgb(0,0,0,0.2);
        width: 210px;
    }
`;