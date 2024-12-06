import React, {useContext, useMemo, useState} from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../../../context";
import CoolButton from "../CoolButton/CoolButton.jsx";
import SignUpForm from "../../LoginForm/LoginForm.jsx";
const Navbar = function(){
    const {isAuthorized, setIsAuthorized} = useContext(AuthContext);
    const logout = event =>{
        setIsAuthorized(false);
        localStorage.removeItem('auth');
    }

    const isAuth = useMemo(() =>{
        console.log(!isAuthorized);
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
                            <Link to='/home'>Главная</Link>
                        </CoolButton>
                        <CoolButton bg={bg}>
                            <Link to='/map'>Карта</Link>
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
                        <Link to='/home'>Главная</Link>
                    </CoolButton>
                </div>
            </div>
    )
}

export default Navbar;