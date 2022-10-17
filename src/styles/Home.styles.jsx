import styled from "styled-components";

export const HomeSection = styled.section`

    .home-text{
        max-width: 1000px;
    }

    .home-text h1{
        font-size: 2rem;
    }

    .home-text p{
        font-size: 1rem;
    }
    
    .links-user{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .links-user a{
        width: 150px;
        margin: 10px;
        padding: 15px 20px;

        text-align: center;
        text-decoration: none;
        font-size: 20px;
        transition: 0.1s;
        background-color: #8ce7ccc3;
        border-radius: 10px;
        color:#182e27;
        cursor: pointer;
        
    }

    .links-user a:hover{
        background-color: #518a79c3;
        color:#84f7d2;
    }
`;