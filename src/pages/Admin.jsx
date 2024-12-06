import React from 'react';
import Status from "../Components/UI/Status/Status.jsx";
import Action from "../Components/UI/Action/Action.jsx";

const Admin = () => {
    const [incidents, setIncidents] = React.useState([
        {id:"1",type:"ДТП",place:"ул. Красная",
            description:" Автоматически обнаружен затор. Уровень загрузки: 4/10. Средняя скорость: 20 км/ч",
            time:" 06.12.2024 13:11", status:true, action:false},
        {id:"1",type:"ДТП",place:"ул. Красная",
            description:" Автоматически обнаружен затор. Уровень загрузки: 4/10. Средняя скорость: 20 км/ч",
            time:" 06.12.2024 13:11", status:false, action:true},
        {id:"1",type:"ДТП",place:"ул. Красная",
            description:" Автоматически обнаружен затор. Уровень загрузки: 4/10. Средняя скорость: 20 км/ч",
            time:" 06.12.2024 13:11", status:true, action:false},
        {id:"1",type:"ДТП",place:"ул. Красная",
            description:" Автоматически обнаружен затор. Уровень загрузки: 4/10. Средняя скорость: 20 км/ч",
            time:" 06.12.2024 13:11", status:false, action:true},
        {id:"1",type:"ДТП",place:"ул. Красная",
            description:" Автоматически обнаружен затор. Уровень загрузки: 4/10. Средняя скорость: 20 км/ч",
            time:" 06.12.2024 13:11", status:true, action:false},
        {id:"1",type:"ДТП",place:"ул. Красная",
            description:" Автоматически обнаружен затор. Уровень загрузки: 4/10. Средняя скорость: 20 км/ч",
            time:" 06.12.2024 13:11", status:false, action:true},
    ]);
    return (
        <div className={"flex w-[80%] h-fit p-4"}>
            <div className={"flex flex-col w-full justify-center mt-5"}>
                <div className={"flex justify-center w-full"}>
                    <p className={"font-bold text-3xl"}>Панель Администратора</p>
                </div>
                <div className={"flex flex-col w-80% h-fit mt-10 border-2 border-solid border-gray-200"}>
                    <div className={"p-4 text-2xl font-medium border-b-gray-300 border-solid border-b-2"}>
                        <p>Управление инцидентами</p>
                    </div>
                    <div className={"flex flex-row w-full justify-between"}>

                        <div className={"overflow-auto"}>
                            <table className="min-w-full border-collapse border border-gray-200">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-200 px-4 py-2 text-left max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">ID</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Тип</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Местоположение</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Описание</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Время</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Статус</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">Действия</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    incidents.map((incident, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="border border-gray-200 px-4 py-2">{incident.id}</td>
                                            <td className="border border-gray-200 px-4 py-2">{incident.type}</td>
                                            <td className="border border-gray-200 px-4 py-2 max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">{incident.place}</td>
                                            <td className="border border-gray-200 px-4 py-2">{incident.description}</td>
                                            <td className="border border-gray-200 px-4 py-2">{incident.time}</td>
                                            <td className="border border-gray-200 px-4 py-2"><Status status={incident.status}/></td>
                                            <td className="border border-gray-200 px-4 py-2"><Action action={incident.action}/></td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;