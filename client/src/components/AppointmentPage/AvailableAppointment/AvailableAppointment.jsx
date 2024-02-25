import './availableAppointment.css'
import AppointmentCard from '../AppointmentCard/AppointmentCard';

const appointmentData=[
    {
    id: 1,
    subject: 'Teeth Cleaning',
    visitingHour: '9am - 12pm',
    totalSpace: 10
},
{
    id: 2,
    subject: 'Surgery',
    visitingHour: '12pm - 3pm',
    totalSpace: 9
},
{
    id: 3,
    subject: 'Dental Problem',
    visitingHour: '3pm - 5pm',
    totalSpace: 11
},
{
    id: 4,
    subject: 'Teeth Cleaning',
    visitingHour: '9am - 12pm',
    totalSpace: 10
},
{
    id: 5,
    subject: 'Teeth Cleaning',
    visitingHour: '9am - 12pm',
    totalSpace: 10
},
{
    id: 6,
    subject: 'Teeth Cleaning',
    visitingHour: '9am - 12pm',
    totalSpace: 8
},
]

const AvailableAppointment = ({selectDate}) => {

    return (
        <div className='row d-flex justify-content-center'>
            <h2 className="text-center customColor mt-5">Available Appointment on {selectDate.toDateString()}</h2>
            {
                appointmentData.map((data, index)=><AppointmentCard key={index} data={data} selectDate={selectDate}/>)
            }
        </div>
    );
};

export default AvailableAppointment;