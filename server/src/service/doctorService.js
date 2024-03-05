const { query } = require("express");
const doctorModel = require("../model/doctorModel")

// Post New Doctor with Image File//
const createDoctor = (input)=>{
    return doctorModel.create(input);
}

// Get Doctor List //
const getDoctorLists= (query, option={lean:true})=>{
    return doctorModel.find(query, {}, option).select({_id: 0, __v: 0});
} 

module.exports= {createDoctor, getDoctorLists};