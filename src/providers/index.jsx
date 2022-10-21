import { UserProvider } from "./user";
const ProvidersGathered  = ({children}) =>{
    return (
        <>
            <UserProvider>{children}</UserProvider>
        </>
    )
}

export default ProvidersGathered ;