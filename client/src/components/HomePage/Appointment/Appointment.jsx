import './appointment.css'
import doctor from "../../../../images/assets/images/doctor.png"

const Appointment = () => {
    return (
        <div style={{marginTop:'650px'}}>
            <div className="banner d-flex align-items-center">
                <div className='doctor'>
                    <img src={doctor} alt="" />
                </div>
                <div>
                    <h5>APPOINTMENT</h5>
                    <h2>Make an Appointment Today</h2>
                    <p style={{width:'60%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est ipsam aspernatur, necessitatibus eius, blanditiis numquam quae facere.</p>
                    <button className="buttonStyle btn">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;