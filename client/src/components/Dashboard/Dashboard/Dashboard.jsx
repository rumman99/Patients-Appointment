import Sidebar from '../Sidebar/Sidebar';
import DashboardAppointment from '../DashboardAppointment/DashboardAppointment';
import DashboardCalendar from '../DashboardCalendar/DashboardCalendar';
import { useEffect, useState } from 'react';
import AllAppointments from '../AllAppointments/AllAppointments';

const Dashboard = () => {
    const [selectDate, setSelectDate]= useState(new Date())
    const [appointment, setAppointment]= useState([])

    const getCalender= date =>{
        setSelectDate(date);
    }

    useEffect(()=>{
         // Format the date manually to dd/mm/yyyy format
        const formatDate = (date) => {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        };
        const formattedDate = formatDate(selectDate);
        fetch('http://localhost:3333/dashboardAppointment',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body: JSON.stringify({date:formattedDate})
        })
        .then(res=> res.json())
        .then(data => setAppointment(data))
    },[selectDate]);

    return (
        <div>
            <div className='container-fluid row'>
                <div className='col-md-2'>
                    <Sidebar/>
                </div>
                <div className='col-md-5 pt-5'>
                    <DashboardCalendar selectDate={selectDate} getCalender={getCalender}/>
                </div>
                <div className='col-md-5 pt-5'>
                    <DashboardAppointment appointment={appointment} selectDate={selectDate}/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;