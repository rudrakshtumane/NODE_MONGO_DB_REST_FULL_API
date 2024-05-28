const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    student_name: {
        type: String,
        require: true
    },
    student_age:{
        type : Number,
        require : true
    }
})

// module.exports = {
//     studentSchema
// }



module.exports = mongoose.model('studentdata',studentSchema)