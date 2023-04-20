const express = require("express"); // include the file express 

const app = express();
//use express
app.use(express.json())
// Route imports
const product =  require("./routes/productRoute");
app.use("/api/v1",product);
module.exports=app