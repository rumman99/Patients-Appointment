import img from "../../../../images/assets/images/people-1.png"
import quote from "../../../../images/assets/icons/quote.svg"

const testimonialData= [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sit praesentium quas aliquid vitae quam illum necessitatibus? Consectetur beatae",
        name: "Ridhan Alam",
        country: 'Bangladesh',
        img: img
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sit praesentium quas aliquid vitae quam illum necessitatibus? Consectetur beatae",
        name: "Ridhan Alam",
        country: 'Bangladesh',
        img: img
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sit praesentium quas aliquid vitae quam illum necessitatibus? Consectetur beatae",
        name: "Ridhan Alam",
        country: 'Bangladesh',
        img: img
    }
]

const Testimonial = () => {
    return (
        <>
        <div className="d-flex text-left ms-5 mt-5 justify-content-between">
            <div>
            <h5 style={{color:'#1cc7c1'}}>TESTIMONIAL</h5>
            <h1>What`s Our Patients Says</h1>
            </div>
            <div>
                <img className="img-fluid w-50" src={quote} alt="" />
            </div>
        </div>
        <div style={{marginTop:'70px'}} className="d-flex justify-content-center">
            {testimonialData.map((data, index)=> {
                return (
                    <div key={index}>
                    <div style={{width: "17rem"}} className="card mx-4" >
                    <div className="card-body">
                        <p className="card-text text-secondary">{data.text}</p>
                        <div className="d-flex justify-content-center mt-5">
                        <img className="img-fluid w-25 me-3" src={data.img} alt="" />
                        <div>
                        <h6 style={{color:'#1cc7c1', fontWeight:'700'}} className="card-subtitle mb-2">{data.name}</h6>
                        <p href="#" className="card-text text-black">{data.country}</p>
                        </div>
                        </div>                       
                    </div>
                    </div>
                    </div>
                )
            })}
        </div>
        </>
    );
};

export default Testimonial;