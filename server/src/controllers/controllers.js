const log = require('../logger/logger');
const {dashboardAppointment, createAppointment} = require('../service/appointmentService');

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

module.exports= {appointment, appointmentByDate};