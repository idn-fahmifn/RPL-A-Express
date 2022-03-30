require("dotenv").config();
const express = require("express");
const app = express();
// import touter index
const indexRoute = require("./router/index")
const userRoute = require("./router/user")

//route
app.use("/", indexRoute, userRoute)


app.listen(process.env.PORT, function(){
    console.log(`Server berjalan di port ${process.env.PORT}`);
});