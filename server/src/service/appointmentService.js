const appointmentModel = require("../model/appointmentModel");

// Post Single Appointment //
const createAppointment= (input)=>{
    return appointmentModel.create(input);
};

module.exports= createAppointment;