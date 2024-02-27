import { Link } from 'react-router-dom';
import './sidebar.css'
import { RxDashboard } from "react-icons/rx";
import { MdOutlineEventNote } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaNotesMedical } from "react-icons/fa";
import { MdOutlineSettingsInputComponent } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className='sidebar'>
                <div className='d-flex' >
                <div className='iconStyle'><RxDashboard /></div>
                <div><Link to="/dashboard"><h6>Dashboard</h6></Link></div>
                </div>
                <div className='d-flex'>
                <div className='iconStyle'><MdOutlineEventNote /></div>
                <div><Link><h6>Appointments</h6></Link></div>
                </div>
                <div className='d-flex'>
                <div className='iconStyle'><BsPeopleFill /></div>
                <div><Link><h6>Patients</h6></Link></div>
                </div>
                <div className='d-flex'>
                <div className='iconStyle'><FaNotesMedical /></div>
                <div><Link><h6>Prescriptions</h6></Link></div>
                </div>
                <div className='d-flex'>
                <div className='iconStyle'><MdOutlineSettingsInputComponent /></div>
                <div><Link><h6>Settings</h6></Link></div>
                </div>
        </div>
    );
};

export default Sidebar;