const express = require("express");
const bodyParser = require("body-parser"); // untuk memparse data dari request

// membuat instance
const router = express.Router();

//route method GET
router.get("/", (req, res, next)=> {
    res.send('Goodbye, Mars!')
}) 

// export router agar bisa dipanggil di index utama (main index)
module.exports = router