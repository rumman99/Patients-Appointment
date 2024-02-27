import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import 'react-calendar/dist/Calendar.css';
import GetCalendar from '../GetCalendar/GetCalendar';
import { useState } from 'react';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const GetAppointmentPage = () => {
    const [selectDate, setSelectDate]= useState(new Date())

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    // Calendar Date //
    const getCalender= date =>{
        setSelectDate(date);
    }
    const formattedDate = formatDate(selectDate);
    return (
        <div>
            <Navbar/>
            <GetCalendar getCalender={getCalender} selectDate={selectDate}/>
            <AvailableAppointment selectDate={formattedDate}/>
            <Footer/>
        </div>
    );
};

export default GetAppointmentPage;