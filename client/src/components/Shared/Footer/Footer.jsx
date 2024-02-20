import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import './footer.css'

const datas=[
    {
        title: <span className="invisible-text">.</span>,
        text: ['Emergency Dental Care', 'Check Up', 'Treatment of Personal Diseases', 'Tooth Extraction', 'Check Up']
    },
    {
        title: 'Services',
        text: ['Emergency Dental Care', 'Check Up', 'Treatment of Personal Diseases', 'Tooth Extraction', 'Check Up', 'Check Up', 'Check Up']
    },
    {
        title: 'Mental Health',
        text: ['Emergency Dental Care', 'Check Up', 'Treatment of Personal Diseases', 'Tooth Extraction', 'Check Up', 'Check Up','Check Up']
    },
    {
        title: 'Our Address',
        text: ['Babar Road, Mohammadpur, Dhaka-1207', 'Check Up', <FaFacebook />, <FaGooglePlus />, <BsTwitterX />]
    }
]

const Footer = () => {
    return (
        <div className="bg-color d-flex justify-content-center mt-5">
            {
                datas.map((data, index) => {
                    return (
                            <div key={index}>
                            <div className="mt-5 mx-5">
                                <h5 style={{color: '#1cc7c1', marginBottom:'20px'}}>{data.title}</h5>
                                <small>{data.text.map(text=> <p className="text-secondary fw-semibold">{text}</p>)}</small>
                            </div>
                            </div>                       
                    )
                })
            }
            <div className="copyright">
            <small className="text-secondary fw-semibold pb-4">Copyright {new Date().getFullYear()} All Right Reserved by "Tasnim Alam Rumman"</small>
            </div> 
        </div>
    );
};

export default Footer;