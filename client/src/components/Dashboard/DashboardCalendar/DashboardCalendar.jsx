import Calendar from 'react-calendar';
import "./dashboardCalendar.css"

const DashboardCalendar = ({getCalender, selectDate}) => {
    return (
        <div>
            <div>
                <Calendar className="calendarStyle" onChange={getCalender} value={selectDate}/>
                </div>
        </div>
    );
};

export default DashboardCalendar;