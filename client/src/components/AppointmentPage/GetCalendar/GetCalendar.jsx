import bg from "../../../../images/assets/images/bg.jpg";
import Calendar from 'react-calendar';

const GetCalendar = ({getCalender, selectDate}) => {

    return (
        <div>
              <div className="row d-flex align-items-center mt-5">
            <div className="col-md-5 offset-md-1">
                <img className="img-fluid rounded-5" src={bg} alt="" />
            </div>
            <div className="col-md-4 offset-md-1">
                <h1 className='mb-md-5'>Appointment</h1>
                <div>
                <Calendar onChange={getCalender} value={selectDate} />
                </div>
            </div>
        </div>
        </div>
    );
};

export default GetCalendar;