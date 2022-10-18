import styled from "styled-components";

export const HomeSection = styled.section`

    .home-text{
        max-width: 600px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .home-text h1{
        font-size: 2rem;
    }

    .home-text p{
        font-size: 1rem;
        text-align: start;
        margin: 5px 0;
    }
    
    .links-user{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

    .links-user a{
        width: 150px;

        margin: 15px;
        padding: 15px;
        
        transition: 0.1s;
        border:none;
        font-size: 15px;
        font-weight: bold;
        background-color: #8ce7cc;
        border-radius: 10px;
        color:#182e27;
        cursor: pointer;
        box-shadow: 1px 1px 3px black, inset 1px 1px 3px rgb(255,255,255,0.6),  inset -1px -1px 3px rgb(0,0,0,0.9);

        text-align: center;
        text-decoration: none;

        
    }

    .links-user a:hover{
        background-color: #518a79c3;
        color:#84f7d2;
    }

    .repo-link{
        text-decoration: none;
        font-weight: bolder;
        font-size: 20px;
        margin: 10px auto;
        color:#84f7d2
    }

    .repo-link:hover{
        color:#8495f7
    }
    
`;