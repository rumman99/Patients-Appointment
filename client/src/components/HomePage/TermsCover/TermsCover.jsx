import patients from "../../../../images/assets/images/patients.jpg"

const TermsCover = () => {
    return (
        <div style={{height:'100px', marginTop:'300px'}}>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-4 offset-md-2">
                <h1>Exceptional Care</h1>
                <p className="text-secondary" style={{width:'80%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, ea. Nam, quisquam numquam amet itaque magnam voluptatibus nihil ipsa debitis quos laboriosam in animi unde aspernatur iure. Tempora, illum a. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, ea. Nam, quisquam numquam amet itaque magnam voluptatibus nihil ipsa debitis quos laboriosam in animi unde aspernatur iure. Tempora, illum a.</p><br/>
                <button className="buttonStyle btn">Learn More</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={patients} alt="" />
            </div>
        </div>
        </div>
    );
};

export default TermsCover;