import React from 'react';
import TextBox from "../Components/UI/Text/TextBox.jsx";
import Select from "../Components/UI/Select/Select.jsx";
import TextArea from "../Components/UI/Text/TextArea.jsx";
import CoolButton from "../Components/UI/CoolButton/CoolButton.jsx";
import {postReport} from "../Services/OurApi/index.js";

const Report = () => {
    const [report, setReport] = React.useState({location_id:"",title:"",text:""});

    console.log(report)
    const createReport = () => {
        var response = postReport(report);
        console.log(response);

    }
    const addReport = (e) => {
        e.preventDefault();
        const newReport = {
            ...report,
        }
        setReport({location_id:"",title:"",text:""});
    }
    return (
        <form onSubmit={e =>
            addReport(e)
        } className={"flex flex-col w-[60%] h-[100vh] items-center mt-10 rounded-lg "}>
            <div className={"flex flex-col w-[60%] items-center justify-center bg-gray-200 border-2 border-white border-solid rounded-sm drop-shadow-lg"}>
                <div className={"p-5 bg-gray-100 w-full"}>
                    <h1>Сообщить о происшествии</h1>
                </div>
                <div className={"w-[95%] p-2"}>
                    <Select value={report.location} onChange={(value) => setReport({...report,location_id:Date.now().toString()})}
                            options={[
                                {location_id: "test", name: "test"},
                                {location_id: "test", name: "test"},
                                {location_id: "test", name: "test"},
                            ]}
                            defaultOption={"Выберите проишествие"}/>
                </div>
                <div className={"w-[95%] p-2"}>
                    <Select value={report.type} onChange={(value) => setReport({...report,type:value})} options={[
                        {value: "dtp", name: "ДТП"},
                        {value: "roadwork", name: "Дорожные работы"},
                        {value: "zator", name: "Затор"},
                        {value: "other", name: "Другое"},
                    ]}
                            defaultOption={"Выберите проишествие"}
                    />
                </div>
                <div className={"w-[95%] p-1 mb-2"}>
                    <TextArea title={"Описание"} description={"введите описание..."}
                        value={report.description}
                        onChange={e => {setReport({...report,description:e.target.value})}}
                    />
                </div>
                <div className={"w-[95%] p-1 mb-2"}>
                    <CoolButton>Отправить</CoolButton>
                </div>
            </div>

        </form>
    );
};

export default Report;