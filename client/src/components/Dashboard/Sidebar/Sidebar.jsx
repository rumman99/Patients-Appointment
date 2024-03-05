import { Link } from 'react-router-dom';
import './sidebar.css'
import { RxDashboard } from "react-icons/rx";
import { MdOutlineEventNote } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaNotesMedical } from "react-icons/fa";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";


const Sidebar = () => {
    return (
        <div className='sidebar'>
                <div className='d-flex' >
                <div className='iconStyle'><RxDashboard /></div>
                <div className='hoverStyle'><Link to="/dashboard"><h6>Dashboard</h6></Link></div>
                </div>
                <div className='d-flex'>
                <div className='iconStyle'><MdOutlineEventNote /></div>
                <div><Link to="/allAppointments"><h6>Appointments</h6></Link></div>
                </div>
                <div className='d-flex'>
                <div className='iconStyle'><BsPeopleFill /></div>
                <div><Link to="/patients"><h6>Patients</h6></Link></div>
                </div>
                <div className='d-flex'>
                <div className='iconStyle'><FaNotesMedical /></div>
                <div><Link to="/prescriptions"><h6>Prescriptions</h6></Link></div>
                </div>
                <div className='d-flex'>
                <div className='iconStyle'><MdOutlineSettingsInputComponent /></div>
                <div><Link to="/settings"><h6>Settings</h6></Link></div>
                </div>
                <div className='d-flex'>
                <div className='iconStyle'><FaUserDoctor /></div>
                <div><Link to="/addDoctor"><h6>Add Doctor</h6></Link></div>
                </div>
        </div>
    );
};

export default Sidebar;