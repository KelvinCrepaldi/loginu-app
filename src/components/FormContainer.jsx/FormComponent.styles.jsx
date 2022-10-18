import styled from "styled-components";

export const FormContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 280px;
        height: 40px;
        margin: 10px 0;
        padding: 0px 20px;

        border:none;
        border-radius: 5px;
        background-color: rgb(0,0,0,0.5);
        border-bottom: 3px solid #008552;
        transition: 0.1s;
        color:#00ffdd;
    }

    input:focus{
        
        outline: none;
        border-bottom-color:#00ff9d;
        width: 300px;
    }
    input:focus::placeholder {
        color: #00ff9d;
    }

    button{
        width: 150px;
        height: 40px;
        margin: 15px 0 30px;
        
        transition: 0.1s;
        border:none;
        font-size: 15px;
        font-weight: bold;
        background-color: #8ce7cc;
        border-radius: 10px;
        color:#182e27;
        cursor: pointer;
        box-shadow: 1px 1px 3px black, inset 1px 1px 3px rgb(255,255,255,0.6),  inset -1px -1px 3px rgb(0,0,0,0.9);
    }

    button:hover{
        background-color: #32ad88;
        width: 155px;
        transform: translateY(-3px);
    }
    button:focus{
        outline: none;
        background-color: #32ad88;
        width: 155px;
        transform: translateY(-3px);
    }

    a{
        text-decoration: none;
        color: #00fff2b8;
        font-size: 15px;
        font-weight: bold;
        transition: 0.1s;
    }
    a:hover{
        transform: scale(1.2);
        color: #9de3ff;
    }

    .error-message{
        color: #f37373;
    }
`;