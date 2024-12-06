import React from 'react';

const Select = function({options, defaultOption, value, onChange}){
    return (
        <select
            value={value} // Убедитесь, что value соответствует одному из значений в options
            onChange={event => onChange(event.target.value)}
            className={"bg-white p-2"}
        >
            <option value="">{defaultOption}</option>
            {
                options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))
            }
        </select>
    );
};
export default Select;