 const express = require('express');
 const dotenv = require("dotenv");
 const bodyParaser = require('body-parser');
 const morGan = require("morgan");
 const path = require("path");





const app = express();




 dotenv.config({path:"./config.env"})
 const POST = process.env.PORT || 9000



app.use(bodyParaser.urlencoded({extended: true}))
app.use(morGan("tiny"))

//the /CSS act
app.use("/css", express.static(path.resolve(__dirname, "./assests/css")))



app.set("view engine", "ejs")


//app.get("/", (req, res)=>{
    // res.send("na me dy here")
//})


app.get("/", (req, res)=>{
    res.render("index.ejs")
})


 

 app.listen(POST, ()=>{console.log(`server running at port http://localhost:${POST}`);})