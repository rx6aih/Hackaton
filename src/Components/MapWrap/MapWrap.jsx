import React from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';

const MapWrap = () => {
    const [incidents, setIncidents] = React.useState([
        {title:"test",description:"Test description 1"},
        {title:"test",description:"Test description 1"},
        {title:"test",description:"Test description 1"},
        {title:"test",description:"Test description 1"},
        {title:"test",description:"Test description 1"},
        {title:"test",description:"Test description 1"},
    ]);
    return (
        <YMaps>
            <div className={"flex flex-row p-5 2xl:w-[70%] border-2 border-solid border-gray-300 rounded-3xl"}>
                <div>
                    <p className={"mb-3 text-xl"}>Карта дорожной ситуации</p>
                    <div className={"border-2 border-solid border-gray-300 w-[100%] h-[93%] rounded-md pl-1"}>
                        <Map defaultState={{center: [55.75, 37.57], zoom: 9}} height={"500px"} width={"700px"}/>
                    </div>
                </div>
                <div className={"flex flex-col w-full h-fit ml-4 border-2 border-solid border-white rounded-xl"}>
                    <div className={"w-[100%] flex bg-gray-200 h-10 rounded-xl text-center items-center justify-center "}>
                        <p className={"flex items-center justify-center h-full w-full"}>Текущие инциденты</p>
                    </div>
                    <div className={"flex flex-col h-fit w-full bg-gray-100 items-center mt-1"}>
                        {
                            incidents.map(incident => (
                                <div key={incident.title} className={"flex flex-row w-[99%] gap-6 p-2 m-1 bg-gray-200 rounded-md"}>
                                    <p>{incident.title}</p>
                                    <p>{incident.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </YMaps>
    );
};

export default MapWrap;