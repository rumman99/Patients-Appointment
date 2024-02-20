import { IoIosTimer } from "react-icons/io";
import { MdLocationCity } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import './infoDesk.css';
import { v4 as uuidv4 } from 'uuid';

const infoDeskData= [
    {
    name: 'Opening Time',
    description: '7 Days from 9am-5pm',
    icon: <IoIosTimer/>,
    backgroundColor: 'primary'
    },
    {
    name: 'Visit Our Location',
    description: 'Mohammadpur, Dhaka',
    icon: <MdLocationCity/>,
    backgroundColor: 'dark'
    },
    {
    name: 'Call Us Now',
    description: '+880-1000000001',
    icon: <MdPermPhoneMsg/>,
    backgroundColor: 'primary'
    }
]

const InfoDesk = () => {

    return (
        <div className="row text-white">
            {infoDeskData.map((info)=> {
                return (
                    <>
                    <div className="col-md-4">
                        <div className={`info-container d-flex justify-content-center info-${info.backgroundColor} p-4 rounded-4`}>
                        <div className="info-icon">
                            {info.icon}
                        </div>
                        <div>
                            <h5>{info.name}</h5>
                            <p>{info.description}</p>
                        </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    );
};

export default InfoDesk;