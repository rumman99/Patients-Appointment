const log = require('../logger/logger');
const createAppointment = require('../service/appointmentService');

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
}

module.exports= appointment;