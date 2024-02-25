import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import 'react-calendar/dist/Calendar.css';
import GetCalendar from '../GetCalendar/GetCalendar';
import { useState } from 'react';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const GetAppointmentPage = () => {
    const [selectDate, setSelectDate]= useState(new Date())

    // const formatDate = (date) => {
    //     return date.toLocaleDateString('en-GB');
    //   };

    /// Calendar Date //
    const getCalender= date =>{
        setSelectDate(date);
    }

    return (
        <div>
            <Navbar/>
            <GetCalendar getCalender={getCalender}/>
            <AvailableAppointment selectDate={selectDate}/>
            <Footer/>
        </div>
    );
};

export default GetAppointmentPage;