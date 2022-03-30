require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // for parsing the body of the request
const middlewareHeader = require("./middlewares/header");
const middlewareBody = require("./middlewares/body");

// middleware
app.use('/',bodyParser.json(), middlewareHeader);

//middleware dengan method POST
app.post('/',bodyParser.urlencoded({extended:true}), middlewareBody, (req, res) => {
    res.send(req.body);
})



// run server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}); // listen on port 3000

//middleware berfungsi untuk mengambil data dari request
// middleware yang menggunakan app.use() berlaku untuk semua request dan method
// middleware yang menggunakan app.get() berlaku hanya untuk request GET
// middleware yang menggunakan app.post() berlaku hanya untuk request POST