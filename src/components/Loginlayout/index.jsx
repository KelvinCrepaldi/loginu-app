import { LayoutContainer } from "./Layout.styles";

const Layout = ({children}) =>{
    return (
        <>
        <LayoutContainer>
            {children}
        </LayoutContainer>
            
        </>
    )
}

export default Layout;