import styled from "styled-components";

export const LayoutContainer = styled.div`
min-width: 100vw;
min-height: 100vh;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

h1{
    font-size: 3rem;
    margin: 20px;
    
}

h1, p{
    text-align: center;
    color: rgb(220, 220, 220, 0.9)
}

.footer{
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: rgb(0,0,0,0.3);
}
.footer span{
    
    margin: 5px 0;
    color: rgb(220,220,220, 0.8);
}

.footer nav a{
    transition: 0.2s ;
    display: inline-block;
    text-decoration: none;
    color: rgb(220,220,220, 0.8);
    margin: 10px;
    padding: 10px;
}

.footer nav a:hover{
    color: rgb(0, 255, 149);
    transform: scale(1.3);
}

`;

