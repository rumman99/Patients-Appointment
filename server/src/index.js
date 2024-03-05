const express = require('express');
const connection = require('./db/db');
const cors = require("cors");
const log = require('./logger/logger');
const router = require('./routes/routes');
const fileUpload = require('express-fileupload');


const PORT= 3333;
const app= express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use('/doctor', express.static(path.join(__dirname, 'doctor')));

// Database Connection //
connection();

// All Routes //
app.use('/', router);

// Error Handle //
const errorHandle=(err, req, res, next)=>{
    if(res.headerSent){
        return next(err)
    }
    else{
        res.status(500).send(err);
    }
}

app.listen(process.env.PORT || PORT, log.info(`Listening to Port ${PORT}`));