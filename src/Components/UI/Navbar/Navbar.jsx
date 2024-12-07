import React, {useContext, useMemo, useState} from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../../../context";
import CoolButton from "../CoolButton/CoolButton.jsx";
import SignUpForm from "../../LoginForm/LoginForm.jsx";
import CoolLink from "../CoolLink/CoolLink.jsx";
const Navbar = function(){
    const {isAuthorized, setIsAuthorized} = useContext(AuthContext);
    const logout = () =>{
        setIsAuthorized(false);
        localStorage.removeItem('auth');
    }

    const isAuth = useMemo(() =>{
        return isAuthorized;
    },[isAuthorized]);

    const bg = "bg-green-300";

    return(
        isAuth
            ? <div className={"w-full h-20 mt-10 flex items-center justify-center"}>
                <div
                    className='w-[70%] h-20 p-5 flex mt-5 flex-row justify-between border-2 border-gray-100 bg-white shadow-md rounded-3xl'>
                    <div className='flex flex-row'>
                        <CoolButton bg={bg}>
                            <CoolLink linkTo={"home"} title={"Главная"}/>
                        </CoolButton>
                        <CoolButton bg={bg}>
                            <CoolLink linkTo={"report"} title={"Сообщить"}/>
                        </CoolButton>
                        <CoolButton bg={bg}>
                            <CoolLink linkTo={"analytic"} title={"Аналитика"}/>
                        </CoolButton>
                        <CoolButton bg={bg}>
                            <CoolLink linkTo={"admin"} title={"Панель"}/>
                        </CoolButton>
                    </div>
                    <CoolButton bg={bg} onClick={logout}>Выйти</CoolButton>
                </div>
            </div>
            : <div className={"w-full h-20 mt-10 flex items-center justify-center"}>
                <div
                    className='w-[70%] h-20 p-5 flex mt-5 flex-row justify-between border-2 border-gray-100 bg-white shadow-md rounded-3xl'>
                    <div className='flex flex-row'>
                        <CoolButton bg={bg}>
                            <Link to='/login'>Авторизация</Link>
                        </CoolButton>
                        <CoolButton bg={bg}>
                            <Link to='/register'>Регистрация</Link>
                        </CoolButton>
                    </div>
                    <CoolButton bg={bg}>
                        <CoolLink linkTo={"home"} title={"Главная"}/>
                    </CoolButton>
                </div>
            </div>
    )
}

export default Navbar;