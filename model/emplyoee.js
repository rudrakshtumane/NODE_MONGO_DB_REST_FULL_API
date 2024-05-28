const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    emplyoee_name:{type: String , require: false },             
    emplyoee_dob: {type : String, require: false},
    emplyoee_email:{type : String , require : false },
    emplyoee_password:{type : String , require : false },
    emplyoee_salary:{type : Number , require : false },
   
  
});

module.exports = mongoose.model('Employee', EmployeeSchema);