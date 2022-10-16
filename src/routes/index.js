import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "../components/Layout";

const RoutesPaths =()=>{
    return(
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Layout>
        
    );
};

export default RoutesPaths;