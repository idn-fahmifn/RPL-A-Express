require("dotenv").config();
const express = require("express");
const app = express();
// import touter index
const indexRoute = require("./router/index")

//route
app.use("/", indexRoute)


app.listen(process.env.PORT, function(){
    console.log(`Server berjalan di port ${process.env.PORT}`);
});