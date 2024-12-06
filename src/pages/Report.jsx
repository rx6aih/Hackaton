import React from 'react';
import TextBox from "../Components/UI/TextBox/TextBox.jsx";
import Select from "../Components/UI/Select/Select.jsx";

const Report = () => {
    const [type, setType] = React.useState("");
    return (
        <div className={"flex flex-col bg-gray-50 rounded-lg"}>
            <div className={"bg-gray-200 w-full"}>
                <h1>Сообщить о происшествии</h1>
            </div>
            <Select value={type} onChange={(e) => setType(e.target.value)} options={[
                {value: "dtp", name: "ДТП"},
                {value: "roadwork", name: "Дорожные работы"},
                {value: "zator", name: "Затор"},
                {value: "other", name: "Другое"},
                ]
            }
            defaultOption={"dtp"}/>
        </div>
    );
};

export default Report;