import React from 'react';
import {DateCalendar, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const CoolDateTime = ({value,setValue}) => {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
            </LocalizationProvider>
        </div>
    );
};

export default CoolDateTime;