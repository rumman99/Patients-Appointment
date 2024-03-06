import React, { useEffect, useState } from 'react';

const OurDoctors = () => {
    const [doctors, setDoctors]= useState([]);

    useEffect(()=>{
        const fetching= (async()=>{
            const data= await fetch('http://localhost:3333/getDoctor')
            const result= await data.json();
            setDoctors(result);
        })()
    },[doctors])

    return (
        <>
        <div className="mt-5 pt-5 text-center">
            <di>
            <h4 style={{color:'#1cc7c1'}}>Our Doctors</h4>
            </di>
        </div>
        <div style={{marginTop:'70px'}} className="d-flex justify-content-center">
            {doctors && doctors.map((data, index)=> {
                return (
                    <div key={index}>
                    <div style={{width: "17rem"}}>
                    <div>
                        <div className='text-center'>
                        {data.imgs && <img style={{height:'150px'}} src={`data:image/png;base64,${data.imgs.img}`} alt="" />}
                        <div className='mt-2'>
                        <h6 style={{fontWeight:'700'}}>{data.name}</h6>
                        <p className="text-secondary">{data.email}</p>
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

export default OurDoctors;