import React, {useEffect, useState} from 'react';
import {YMaps, Map, TrafficControl} from '@pbe/react-yandex-maps';
import Chat from "../Chat/Chat.jsx";
import {reportGet} from "../../Services/OurApi/index.js";

const MapWrap = () => {
    const [incidents, setIncidents] = React.useState([]);
    const [reports, setReports] = useState([]);
    useEffect(() => {
        const fetchReports = async () => {
            try {
                const newReports = await reportGet(); // Используем await!
                setReports(newReports); // Обновляем состояние
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
                //Обработка ошибки, например, вывод сообщения об ошибке пользователю
            }
        };

        fetchReports();
    }, []);
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
                    <div className={"flex flex-col w-full h-fit ml-4 rounded-xl border-2 border-solid border-zinc-200"}>
                        <div
                            className={"w-[100%] flex bg-gray-200 h-10 rounded-xl text-center items-center justify-center "}>
                            <p className={"flex items-center justify-center h-full w-full text-xl"}>Текущие
                                инциденты</p>
                        </div>
                        <div className={"flex flex-col h-52 w-full bg-gray-100 border-b-2 border-t-2 border-solid border-zinc-400 rounded-md p-2 items-center mt-4 overflow-y-scroll overflow-x-hidden"}>
                            {
                                reports.map(report => (
                                    <div key={report.location}
                                         className={"flex flex-row w-[99%] gap-6 p-3 m-1 bg-gray-300 rounded-md text-lg"}>
                                        <p>{report.location}</p>
                                        <p>{report.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={"mt-10"}>
                            <Chat/>
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