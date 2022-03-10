require("dotenv").config()
const express = require('express')
const app = express();

// app.get('/', (req, res) => {
//     res.send("Hello")
// });
// app.listen(port, function( ){
//     console.log(`Server berjalan di port ${port}`)
// external config

app.get('/', (req, res) => {
    let status = process.env.PORT == 5000 ? "Production" : "Development"
    res.send(`Hello, anda sedang di halaman : ${status} page.`)
})

app.listen(process.env.PORT, function(){
    console.log(`Anda sendang berjalan menggunakan port : ${process.env.PORT}`)
})


