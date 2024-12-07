import React from 'react';
import {BarChart} from "@mui/x-charts";
import CoolDateTime from "../Components/UI/CoolDateTime/CoolDateTime.jsx";

const Analytic = () => {
    const [regionReports, setRegionReports] = React.useState([
        {region:"Тест регsssssss",avgLoad:"30",avgSpeed:"40",incident:"Затор"},
        {region:"Тест регион",avgLoad:"30",avgSpeed:"40",incident:"Затор"},
        {region:"Тест регион",avgLoad:"30",avgSpeed:"40",incident:"Затор"},
        {region:"Тест регион",avgLoad:"30",avgSpeed:"40",incident:"Затор"},
        {region:"Тест регион",avgLoad:"30",avgSpeed:"40",incident:"Затор"},
    ])
    return (
        <div className={"flex flex-col mt-10 h-full w-[70%]"}>
            <div className={"flex h-[100%] items-center bg-zinc-50 mb-10 rounded-xl border-2 border-zinc-200 border-solid"}>
                <div className={"flex ml-12 bg-rose-100"}>
                    <CoolDateTime/>
                </div>
                <div className={"flex ml-16  mt-4 mb-4"}>
                    <BarChart
                        xAxis={[
                            {
                                id: 'barCategories',
                                data: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",],
                                scaleType: 'band',
                            },
                        ]}
                        series={[
                            {
                                data: [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 5, 1, 2, 3, 1, 2, 4, 4, 2, 1, 1],
                            },
                        ]}
                        width={900}
                        height={500}
                    />
                </div>

            </div>

            <div className="overflow-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-200 px-4 py-2 text-left">Регион</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Средняя загрузка</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Средняя скорость</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Инциденты</th>
                    </tr>
                    </thead>
                    <tbody className={"bg-zinc-200"}>
                    {
                        regionReports.map((region, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="border border-gray-200 px-4 py-2 max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">{region.region}</td>
                                <td className="border border-gray-200 px-4 py-2">{region.avgLoad}</td>
                                <td className="border border-gray-200 px-4 py-2">{region.avgSpeed}</td>
                                <td className="border border-gray-200 px-4 py-2">{region.incident}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
            );
            };

            export default Analytic;