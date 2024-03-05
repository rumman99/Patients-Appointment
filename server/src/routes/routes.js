const express = require("express");
const {appointment, appointmentByDate, addDoctor, getDoctorList} = require("../controllers/controllers");
const router = express.Router();

// Post Appointment //
router.post('/appointment', appointment);

// Get Dashboard Appointment by Date //
router.post('/dashboardAppointment', appointmentByDate);

// Post Doctor File //
router.post('/addDoctor', addDoctor);

// Get Doctor List //
router.get('/getDoctor', getDoctorList)

module.exports= router;