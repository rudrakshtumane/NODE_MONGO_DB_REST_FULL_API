const express = require('express');
const Model = require('../model/model');
const mongoose  = require('mongoose');
const EmployeeModel = require('../model/emplyoee');

const router = express.Router();

router.post('/post', async (req,res)=>{
// res.send('data from post');
console.log(req.body);
const data = new Model ({
    student_name: req.body.student_name,
    student_age: req.body.student_age,
})
try{
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
}
catch(error){
    res.status(500).json(error);
}
}) 

router.get('/getAll',async(req,res)=>{
    res.send('get all data');
    try{
        const data = await Model.find();
        res.json(data); 
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/updateById:id',(req,res)=>{
    res.send(req.params.id)
})




//  post
router.post('/addEmployee', async(req,res) => {
    const empData = new EmployeeModel({
        emplyoee_name: req.body.emplyoee_name,
        emplyoee_dob: req.body.emplyoee_dob,
        emplyoee_email: req.body.emplyoee_email,
        emplyoee_password: req.body.emplyoee_password,
        emplyoee_salary: req.body.emplyoee_salary,
    });
    try{
        const empSave = await empData.save();
        res.status(200).json(empSave);
    }
    catch(error){
        res.status(500).json(error);
    }
})

// get
router.get('/getAllEmployee', async(req,res) => {
    try{
        const data = await EmployeeModel.find();
        res.json(data);
        console.log(data.map(emp => emp.emplyoee_name));
    }
    catch(error){
        res.status(500).json({error})
    }
})

// delete
router.delete('/deleteById:id', async(req,res)=>{
    // res.send('Delete by ID API');
    try{
        const id = req.params.id;
        const data = await EmployeeModel.findByIdAndDelete(id);
        res.send(`Data with ${data.name} is delete....`)
    } 
    catch(error){
        res.status(400).json({error})
    }
})

// update
router.patch('/updateByData:id',async(req,res)=>{
    try {
        const id = req.params.id;
        // console.log(id);
        const updatedData = req.body;
        // const options = {new: true};
        console.log(updatedData);
        const result = await EmployeeModel.findByIdAndUpdate(id, updatedData);
        // console.log(result);
        res.send(result);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})



module.exports = router;