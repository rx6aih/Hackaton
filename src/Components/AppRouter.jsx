import React, {useContext} from 'react';
import {AuthContext} from "../context/index.js";
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../route/index.js";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import MyMap from "../pages/MyMap.jsx";
import Report from "../pages/Report.jsx";
const AppRouter = () => {
    const {isAuthorized, setIsAuthorized} = useContext(AuthContext);
    return (
        isAuthorized
            ?<Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/map"} element={<MyMap/>}/>
                <Route path={"/report"} element={<Report/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
            :<Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>

    );
};

export default AppRouter;