import MainCover from "../MainCover/MainCover";
import Navbar from "../../Shared/Navbar/Navbar";
import './header.css'

const Header = () => {
    return (
        <div className="triangle">
        <Navbar showLogo={true}/>
        <MainCover/>
        </div>
        );
};

export default Header;