import logo from "../../../../images/assets/images/logo.png"

const Navbar = () => {
    return (
        <>
        <nav className="navDesign navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="img-fluid w-25" src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item ms-5">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item ms-5">
                    <a className="nav-link active" aria-current="page" href="#">About Us</a>
                    </li>
                    <li className="nav-item ms-5">
                    <a className="nav-link active" aria-current="page" href="#">Services</a>
                    </li>
                    <li className="nav-item ms-5">
                    <a className="nav-link active" aria-current="page" href="#">Reviews</a>
                    </li>
                    <li className="nav-item ms-5">
                    <a className="nav-link active" aria-current="page" href="#">Blogs</a>
                    </li>
                    <li className="nav-item ms-5 me-5">
                    <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;