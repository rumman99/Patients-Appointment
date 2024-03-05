const mongoose= require('mongoose');
const doctorSchema = require("../schema/doctorSchema");

const doctorModel = new mongoose.model('Doctor', doctorSchema);

module.exports= doctorModel;