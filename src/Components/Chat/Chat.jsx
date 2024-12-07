import React, {useState} from 'react';
import TextBox from "../UI/Text/TextBox.jsx";

const Chat = ({messageFromMap}) => {
    const [message, setMessage] = useState("Здесь будет ответ от бота по поводу проишествия");
    return (
        <div className={"flex flex-col w-full h-72 bg-white rounded-lg border-t-2 border-b-2 border-zinc-300 border-solid"}>
            <div className={"flex h-full mb-2 p-2 border-t-2 border-b-2 border-zinc-200 border-solid"}>
                <label>{message}</label>
            </div>
            <TextBox placeholder={"проишествие..."}/>
        </div>
    );
};

export default Chat;