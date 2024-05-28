const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/routes');

const app = express();

app.use(express.json());

app.use('/api',router);



mongoose.connect('mongodb+srv://rudrakshtumane100:Hskardur%400218@cluster0.xc8zm.mongodb.net/');

    const database = mongoose.connection ;

    database.on('error',(error) => {
        console.log(error)
    })

    database.once('connected',()=> {
         console.log('database connected');
    })






app.listen(5002,()=>{
    console.log('server started on port 5002');
})