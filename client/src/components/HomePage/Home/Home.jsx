import Footer from "../../Shared/Footer/Footer";
import Appointment from "../Appointment/Appointment";
import Header from "../Header/Header"
import InfoDesk from "../InfoDesk/InfoDesk"
import OurDoctors from "../OurDoctors/OurDoctors";
import Services from "../Services/Services";
import TermsCover from "../TermsCover/TermsCover";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Header/>
            <InfoDesk/>
            <Services/>
            <TermsCover/>
            <Appointment/>
            <Testimonial/>
            <OurDoctors/>
            <Footer/>
        </div>
    );
};

export default Home;