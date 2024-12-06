import React from 'react';

const CoolButton = ({bg, children}) => {
    return (
        <button className={`lg:w-[135px] pl-2 pr-2 mr-2 ml-2 lg:h-[40px] bg-white drop-shadow-sm border-2 rounded-2xl hover:scale-[1.05] transition-all 
        ${bg}
        hover:bg-gray-50`}>
            {children}
        </button>
    );
};

export default CoolButton;