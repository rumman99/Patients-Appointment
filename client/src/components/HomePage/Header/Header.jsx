import MainCover from "../MainCover/MainCover";
import Navbar from "../Navbar/Navbar";
import './header.css'

const Header = () => {
    return (
        <div className="triangle">
        <Navbar/>
        <MainCover/>
        </div>
        );
};

export default Header;