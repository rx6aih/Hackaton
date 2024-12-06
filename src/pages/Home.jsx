import React from 'react';
import MapWrap from "../Components/MapWrap/MapWrap.jsx";

const Home = () => {
    return (
        <div className={"w-full h-full flex items-center justify-center"}>
            <div className={"flex flex-col w-[100%] justify-center items-center"}>
                <div className={'w-full h-10 flex justify-center items-center p-20 mb-10'}>
                    <h1 className={"text-center text-3xl"}>Центр организации дорожного движения Краснодарского края</h1>
                </div>
                <div className={"w-[100%] p-2 flex flex-col items-center bg-gray-100 shadow-xl drop-shadow rounded-lg"}>
                    <MapWrap/>
                </div>
            </div>

        </div>
    );
};

export default Home;