import { NavLink } from "react-router-dom";
import logo from "../../../../images/assets/images/logo.png"

const Navbar = ({showLogo}) => {

    return (
        <>
        <nav className="navDesign navbar navbar-expand-lg">
            <div className="container-fluid">
                {showLogo && <a className="navbar-brand" href="#"><img className="img-fluid w-25" src={logo} alt="" /></a>}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item ms-5">
                    <NavLink to='/'><button className="btn btn-outline-dark" aria-current="page" href="#">Home</button></NavLink>
                    </li>
                    <li className="nav-item ms-5">
                    <NavLink to='/dashboard'><button className="btn btn-outline-dark" aria-current="page" href="#">Dashboard</button></NavLink>
                    </li>
                    <li className="nav-item ms-5">
                    <NavLink href=""><button className="btn btn-outline-dark" aria-current="page" href="#">About Us</button></NavLink>
                    </li>
                    <li className="nav-item ms-5">
                    <NavLink href=""><button className="btn btn-outline-dark" aria-current="page" href="#">Services</button></NavLink>
                    </li>
                    <li className="nav-item ms-5">
                    <NavLink href=""><button className="btn btn-outline-dark" aria-current="page" href="#">Review</button></NavLink>
                    </li>
                    <li className="nav-item ms-5">
                    <NavLink href=""><button className="btn btn-outline-dark" aria-current="page" href="#">Blogs</button></NavLink>
                    </li>
                    <li className="nav-item ms-5 me-5">
                    <NavLink href=""><button className="btn btn-outline-dark" aria-current="page" href="#">Contact Us</button></NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;