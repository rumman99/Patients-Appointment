const mongoose= require('mongoose');
const appointmentSchema = require('../schema/appointmentSchema');

const appointmentModel = new mongoose.model('Appointment', appointmentSchema);


module.exports= appointmentModel;