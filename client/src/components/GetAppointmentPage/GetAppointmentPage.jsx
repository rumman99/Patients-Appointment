import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import bg from "../../../images/assets/images/bg.jpg";

const GetAppointmentPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="col-md-5 offset-md-1 mt-5">
                <img className="img-fluid rounded-5" src={bg} alt="" />
            </div>
            <Footer/>
        </div>
    );
};

export default GetAppointmentPage;