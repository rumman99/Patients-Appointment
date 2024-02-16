import bg from "../../../../images/assets/images/bg.jpg";
import "./mainCover.css"

const MainCover = () => {
    return (
        <div className="row d-flex align-items-center mt-5">
            <div className="col-md-5 offset-md-1">
                <img className="img-fluid rounded-5" src={bg} alt="" />
            </div>
            <div className="col-md-4 offset-md-1">
                <h1>Your New Life <br/> Start From Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam modi impedit perferendis quidem atque consequuntur voluptatem nesciunt aliquid non.</p>
                <button className="buttonStyle btn">Get Appointment</button>
            </div>
        </div>
    );
};

export default MainCover;