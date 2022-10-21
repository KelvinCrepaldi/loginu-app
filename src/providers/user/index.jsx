import { createContext, useState, useEffect } from "react";
import api from "../../services";

export const UserContext = createContext();

export const UserProvider = ({children}) =>{

    const [token, setToken] = useState(false);
    const [user, setUser] = useState([]);
    const [usersList, setUsersList] = useState([]);
    const [isLogged, setIsLogged] = useState(()=>{
        const isLogged = localStorage.getItem("token") || false;
        if(isLogged){
            return true
        }
        return false
    });

    const requestUsersList = () =>{
        api.get(`user`,{
            headers: {
              Authorization: `Bearer ${token}`
            }}
            ).then((res)=>{
                setUsersList([...res.data.users])

        }).catch((error)=>{
            console.log(error)
        });
        return 0;
    }
    
    useEffect(()=>{
        requestUsersList();
    },[]);

    const requestLogin = (e)=>{

        const {email, password} = e;

        api.post(`user/login`,{email, password}).then((res)=>{
            localStorage.setItem("token", res.data.token)
            setToken(res.data.token)
            setUser(res.data.user)
            setIsLogged(true)

        }).catch((error)=>{
            console.log(error)

        });
    
    }

    return(
        <UserContext.Provider value={{usersList, requestLogin, user, token, setToken, isLogged}}>{children}</UserContext.Provider>
    )
}