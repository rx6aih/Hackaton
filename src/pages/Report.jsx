import React, {useState} from 'react';
import TextBox from "../Components/UI/Text/TextBox.jsx";
import Select from "../Components/UI/Select/Select.jsx";
import TextArea from "../Components/UI/Text/TextArea.jsx";
import CoolButton from "../Components/UI/CoolButton/CoolButton.jsx";
import {placePost, postReport} from "../Services/OurApi/index.js";

const Report = () => {
    const [report, setReport] = useState({location_id:"",title:"",text:""});
    const [place, setPlace] = useState({title:""})
    console.log(report)
    const createReport = (newReport) => {
        var response = postReport(report);
        console.log(response);
    }
    const addReport = (e) => {
        e.preventDefault();
        const newReport = {
            ...report,
        }
        createReport(newReport);
        setReport({location_id:"",title:"",text:""});
    }

    const createPlace = (newPlace) => {
        var response = placePost(newPlace);
        console.log(response);

    }
    const addPlace = (e) => {
        e.preventDefault();
        const newPlace = {
            ...place,
        }
        createPlace(newPlace);
        setPlace({title: ""});
    }


    return (
        <form className={"flex flex-col w-[60%] h-[100vh] items-center mt-10 rounded-lg "}>
            <div className={"flex flex-col w-[60%] items-center justify-center bg-gray-200 border-2 border-white border-solid rounded-sm drop-shadow-lg"}>
                <div className={"p-5 bg-gray-100 w-full"}>
                    <h1>Сообщить о происшествии</h1>
                </div>
                <div className={"flex flex-row w-[95%] p-2"}>
                    <div className={"mt-auto mr-10"}>
                        <Select value={report.location} onChange={(value) => setReport({...report,location_id:Date.now().toString()})}
                                options={[
                                    {location_id: "test", name: "test"},
                                    {location_id: "test", name: "test"},
                                    {location_id: "test", name: "test"},
                                ]}
                                defaultOption={"Выберите место"}/>
                    </div>

                    <div className={"flex flex-row items-center justify-center ml-2"}>
                        <div className={"mt-5"}>
                            <TextBox placeholder={"введите новое место"}   value={place.title}
                                     onChange={e => {setPlace({...place,title:e.target.value})}}/>
                        </div>
                        <div className={"flex mt-5 justify-center items-center"}>
                            <CoolButton children={"Добавить"} onClick={e=>addPlace(e)}/>
                        </div>
                    </div>
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
                    <CoolButton onClick={e=>addReport(e)}>Отправить</CoolButton>
                </div>
            </div>

        </form>
    );
};

export default Report;