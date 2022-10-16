import { LayoutContainer } from "./Layout.styles";
import { Link } from "react-router-dom";
const Layout = ({children}) =>{
    return(<LayoutContainer>
        <div>
            <h1>Loginu APP</h1>
            <p>Um simples projeto de autenticação com jsonwebtoken e bcrypt...</p>
        </div>
        {children}
        <footer className="footer">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <span>Created by Kelvin Crepaldi.</span>
            <span>React.js 2022</span>
        </footer>
    </LayoutContainer>)
}

export default Layout;