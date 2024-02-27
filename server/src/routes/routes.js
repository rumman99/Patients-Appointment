const express = require("express");
const {appointment, appointmentByDate} = require("../controllers/controllers");
const router = express.Router();

// Post Appointment //
router.post('/appointment', appointment);

// Get Dashboard Appointment by Date //
router.post('/dashboardAppointment', appointmentByDate);

module.exports= router;