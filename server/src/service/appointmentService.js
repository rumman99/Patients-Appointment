const appointmentModel = require("../model/appointmentModel");

// Post Single Appointment //
const createAppointment= (input)=>{
    return appointmentModel.create(input);
};

// Get Dashboard Appointment by Date //
const dashboardAppointment= (query, option={lean:true})=>{
    return appointmentModel.find(query, {}, option).select({_id: 0, __v: 0});
}

module.exports= {createAppointment, dashboardAppointment};
