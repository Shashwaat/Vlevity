//to use mongoose we'll use this 
const mongoose = require("mongoose");

//function to connect data
const connectDatabase = ( ) =>{
    //use of 
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log('Mongodb connected with server: ${data.connection.host}');
        }).catch((err)=>{
            console.log(err);
        })
}

module.exports = connectDatabase