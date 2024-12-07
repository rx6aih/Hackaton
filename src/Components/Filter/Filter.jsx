import React from 'react';
import CoolButton from "../UI/CoolButton/CoolButton.jsx";

const Filter = ({setFilter}) => {
    const changeFilter = (filter,e) => {
        setFilter(filter);
    }
    return (
        <div className={"flex flex-row gap-2"}>
            <CoolButton bg={"bg-yellow-400"} onClick={(e) => changeFilter(1, e)}>Все</CoolButton>
            <CoolButton bg={"bg-lime-600"} color={"text-white"} text onClick={(e) => changeFilter(2, e)}>Активные</CoolButton>
            <CoolButton bg={"bg-rose-600"} color={"text-white"} onClick={(e) => changeFilter(3, e)}>Закрытые</CoolButton>
        </div>
    );
};

export default Filter;