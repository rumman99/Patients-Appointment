const express = require("express");
const appointment = require("../controllers/controllers");
const router = express.Router();

// Post Appointment //
router.post('/appointment', appointment);

module.exports= router;