import React from 'react';
import {YMaps, Map, TrafficControl} from '@pbe/react-yandex-maps';

const MapWrap = () => {
    const [incidents, setIncidents] = React.useState([
        {place:"Красная 200",type:"Затор"},
        {place:"Красная 200",type:"Затор"},
        {place:"Красная 200",type:"Затор"},
        {place:"Красная 200",type:"Затор"},
        {place:"Красная 200",type:"Затор"},
        {place:"Красная 200",type:"Затор"},
    ]);
    return (
        <YMaps>
            <div className={"flex flex-col p-5 2xl:w-[70%] border-2 border-solid border-gray-300 rounded-3xl"}>
                <div className={"flex flex-row"}>
                    <div>
                        <p className={"mb-3 text-2xl"}>Карта дорожной ситуации</p>
                        <div className={"border-2 border-solid border-gray-300 w-[100%] h-[93%] rounded-md pl-1"}>
                            <Map defaultState={{center: [45.02, 38.95], zoom: 10}} height={"500px"} width={"900px"}>
                                <TrafficControl options={{float: "right"}}/>
                            </Map>
                        </div>
                    </div>
                    <div className={"flex flex-col w-full h-fit ml-4 rounded-xl"}>
                        <div
                            className={"w-[100%] flex bg-gray-200 h-10 rounded-xl text-center items-center justify-center "}>
                            <p className={"flex items-center justify-center h-full w-full text-xl"}>Текущие
                                инциденты</p>
                        </div>
                        <div className={"flex flex-col h-fit w-full bg-gray-100 items-center mt-1"}>
                            {
                                incidents.map(incident => (
                                    <div key={incident.place}
                                         className={"flex flex-row w-[99%] gap-6 p-3 m-1 bg-gray-300 rounded-md text-lg"}>
                                        <p>{incident.place}</p>
                                        <p>{incident.type}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={"w-[100%] flex flex-col h-40 mt-10 p-2 bg-gray-300 rounded-xl border-2 border-solid border-gray-200 "}>
                    <p>Статистика загруженности</p>
                </div>
            </div>


        </YMaps>
    );
};

export default MapWrap;