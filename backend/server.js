const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database") // including necessary files to use config database
dotenv.config({path:"backend/config/config.env"})
connectDatabase()


//listening the event from the port
app.listen(process.env.PORT,()=>{
    console.log('Server is working on http://localhost:${process.env.PORT}') // it will redirect to the local host env port
})