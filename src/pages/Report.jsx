import React from 'react';
import TextBox from "../Components/UI/Text/TextBox.jsx";
import Select from "../Components/UI/Select/Select.jsx";
import TextArea from "../Components/UI/Text/TextArea.jsx";
import CoolButton from "../Components/UI/CoolButton/CoolButton.jsx";

const Report = () => {
    const [report, setReport] = React.useState({place:"",type:"",description:""});
    const createReport = (newReport) => {
        //api
    }
    const addReport = (e) => {
        e.preventDefault();
        const newReport = {
            ...report,
        }
        setReport({place:"",type:"",description:""});
    }
    return (
        <form onSubmit={e =>
            addReport(e)
        } className={"flex flex-col w-[60%] h-[100vh] items-center mt-10 rounded-lg "}>
            <div className={"flex flex-col w-[60%] items-center justify-center bg-gray-200 border-2 border-white border-solid rounded-sm drop-shadow-lg"}>
                <div className={"p-5 bg-gray-100 w-full"}>
                    <h1>Сообщить о происшествии</h1>
                </div>
                <div className={"w-[95%] p-1"}>
                    <TextBox title={"Местоположение"} placeholder={"место..."} value={report.place} onChange={e => {setReport({...report, place:e.target.value})}} />
                </div>
                <div className={"w-[95%] p-1 pl-2"}>
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