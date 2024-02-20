import teeth from "../../../../images/assets/images/whitening.png"
import cavity from "../../../../images/assets/images/cavity.png"
import fluoride from "../../../../images/assets/images/fluoride.png"

const servicesData= [
    {
    name: 'Fluoride Treatment',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae',
    img: fluoride
    },
    {
    name: 'Cavity Filling',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae',
    img: cavity
    },
    {
    name: 'Teeth Whitening',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae',
    img: teeth
    }
]

const Services = () => {
    return (
        <section style={{height:'200px', marginTop:'100px'}}>
            <div className="text-center mt-5 h-100">
                <h4 style={{color:'#1cc7c1'}}>OUR SERVICES</h4>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex text-center justify-content-center">
            {servicesData.map((info, index)=> {
                return (
                    <span key={index}>
                    <div style={{color:"#3a4256"}}>
                        <div className='info-container d-flex justify-content-center p-4 rounded-4'>
                        <div>
                            <img style={{height:'60px', marginBottom:'15px'}} className="img-fluid" src={info.img} alt="" />
                            <h5 style={{marginBottom:'15px'}}>{info.name}</h5>
                            <p className="text-secondary" style={{width:'280px'}}>{info.description}</p>
                        </div>
                        </div>
                    </div>
                    </span>
                )
            })}
        </div>
        </section>
    );
};

export default Services;