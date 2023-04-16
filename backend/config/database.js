
const mongoose = require("mongoose");

mongoose.connect("mongo://localhost:27017/thriftecom",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((data)=>{
console.log('Mongodb connected with server: ${data.connection.host}');
}).catch((err)=>{
    console.log(err);
})