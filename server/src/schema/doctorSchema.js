const mongoose= require('mongoose');

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
},
    {timestamps: true}
);

module.exports= doctorSchema; 