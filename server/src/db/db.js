require('dotenv').config();
const mongoose= require("mongoose");
const log = require('../logger/logger');

const connection= async()=>{
    return await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster-rumman0.pqu8dwy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(()=> log.info("Database Connected"))
    .catch((err)=> console.log(err));
}

module.exports= connection;