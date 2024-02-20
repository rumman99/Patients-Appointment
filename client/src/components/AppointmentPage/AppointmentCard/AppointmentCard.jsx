import { useState } from "react";
import ModalAppointment from "../ModalAppointmet/ModalAppointment";

const AppointmentCard = ({data}) => {
    /// Handle Get Appointment Modal /// 
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
        <div className="text-center col-md-3 d-flex justify-content-center border border-secondary-subtle rounded mt-5 mx-2">
        <div className="py-4">
            <div className='customColor fw-bolder'>
                <h5 className='fw-semibold'>{data.subject}</h5>
            </div>
        <div>
            <h6 className='fw-semibold'>{data.visitingHour}</h6>
        </div>
        <div>
            <small className='text-secondary'>{data.totalSpace} Space Available</small>
        </div>
        <button onClick={openModal} className="mt-3 customButton btn">Get Appointment</button>
        </div>
    {/* Modal Component */}
    <ModalAppointment subject={data} modalIsOpen={modalIsOpen} closeModal={closeModal}/>
        </div>
        </>
    );
};

export default AppointmentCard;