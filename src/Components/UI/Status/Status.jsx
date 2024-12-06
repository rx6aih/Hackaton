import React from 'react';

const Status = ({status}) => {
    return (
        status
            ?<div className={"flex justify-center items-start w-[75px] h-[16px] pb-5 bg-lime-300"}>
                <p>Активно</p>
            </div>
            :<div className={"flex justify-center items-start w-[75px] h-[16px] pb-5 bg-red-100"} >
                <p>Закрыт</p>
             </div>
    );
};

export default Status;