const log = require('../logger/logger');
path = require('path')
const fsExtra = require('fs-extra');
const {dashboardAppointment, createAppointment} = require('../service/appointmentService');
const {createDoctor, getDoctorLists} = require('../service/doctorService');

// Post Appointment //
const appointment = async(req, res)=>{
    try{
        await createAppointment(req.body);
        res.status(200).send(true);
        log.info("Create Appointment Successfully");
    }
    catch(err){
        log.error(err);
    }
};

// Get Dashboard Appointment by Date //
const appointmentByDate= async(req, res)=>{
    const date= req.body.date;

    try{
        const dashboardAppoint=await dashboardAppointment({date: date});
        if(dashboardAppoint){
            res.status(200).send(dashboardAppoint);
        }
        else{
            log.info("Not Found");
        }
    }
    catch(err){
        log.error(err);
    }
}

// Post a New Doctor with Image File //
const addDoctor= async(req, res)=>{
    try{
        const file= req.files.file;
        const name= req.body.name;
        const email= req.body.email;
        const filePath= `${__dirname, '..', 'doctor', file.name}`;

        if(!file || !name || !email){
            res.status(400).send({msg: "missing fields"});
        }

        await file.mv(path.join(filePath), error => {
            if(error){
                console.log(error);
                res.status(500).send({msg: "File Upload Error"})
            }
            // Encoded image file as Base65 //
            const newImg= fsExtra.readFileSync(filePath);
            const encodeBase65= newImg.toString('base64');
            let imgs= {
                contentType: file.mimetype,
                size: file.size,
                img: Buffer.from(encodeBase65, 'base64')
            }

            const result= createDoctor({imgs, name, email});
            if(result){
                fsExtra.remove(filePath, error =>{
                    if(error){
                        log.error(error);
                    }
                    res.status(200).send({msg:'Doctor Created'})
                });
            }
            else{
                log.error('Failed to Create Doctor')
            }
            // res.send({file: file.name, path: `/doctor/${file.name}`})
        }
        )
    }
    catch(err){
        log.error(err);
    }
}

// Get Doctor List //
const getDoctorList= async(req, res)=>{
    try{
        const doctorList= await getDoctorLists({});
        if(doctorList){
            res.status(200).send(doctorList);
        }
        else{
            log.info("Not Found");
        }
    }
    catch(err){
        log.error(err);
    }
}


module.exports= {appointment, appointmentByDate, addDoctor, getDoctorList};