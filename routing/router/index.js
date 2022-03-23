const express = require("express");
const bodyParser = require("body-parser"); // untuk memparse data dari request

// membuat instance
const router = express.Router();

//route method GET
router.get("/", (req, res, next)=> {
    res.send('Goodbye, Mars!')
}) 

// route method POST
router.post(
    "/", 
    bodyParser.json(),
    bodyParser.urlencoded({extended:true}),
    (req, res, next)=>{
        res.send(req.body)
    }
)

// route method DELETE
router.delete("/:id", (req, res, next) => {
    res.send(`Data dengan id ${req.params.id} telah dihapus`)
})

router.delete("/", (req, res, next)=>{
    res.send(`Masukan dulu id nya`)
})

// export router agar bisa dipanggil di index utama (main index)
module.exports = router