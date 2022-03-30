const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// membuat array dummy data berupa object yang nantinya akan di get
const users = [
    {
        id:1,
        name:"danish",
        email:"danish@test.com"
    },
    {
        id:2,
        name:"asep",
        email:"asep@test.com"
    },
    {
        id:3,
        name:"saefulloh",
        email:"saefulloh@test.com"
    }
]

// menampilkan seluruh data usera
router.get("/user", (req, res, next) => {
    res.status(200).json({
        message: "Berhasil Menampilkan seluruh data users",
        body: users
    })
})

// menampilkan sebuah data berdasarkan id
router.get("/user/:id", (req, res, next) => {
    const id = req.params.id;
    for(let i = 0; i < users.length; i++){
        let user = users[i]
        if(user.id === parseInt(id)){
            res.status(200).json({
                message: "Berhasil Menampilkan seluruh data users",
                body: user
            })
            return next(router)
        }
    }
    res.status(404).json({
        message: "Data tidak ditemukan",
    })
})

// menambahkan request dengan method post

router.post(
    "/user",
    bodyParser.urlencoded({ extended:true }), //midleware ini untuk mengambil request data body
    (req,res, next) => {
        const {name, email} = req.body;

        if(!name || !email) {
            res.send({
                error: "membutuhkan sebuah request email dan name"
            })
            return next("route")
        }
        const user = {
            id:users.length + 1, name, email
        }
        // untuk menambahkan request user baru dan dimasukan ke array "users"
        users.push({user})
        // agar client bisa melihat request
        res.send({users})
    }
)

// route dengan method delete
router.delete(
    "/user/:id", (req, res, next) => {
        // get id untuk di get di params
        const id = req.params.id

        // looping untuk mencari data id yang akan dihapus
        for (let i = 0; i < users.length; i++){
            let user = users[i];
            if(user.id === parseInt(id)){
                users.splice(i, 1)
                // res.send({users})
                res.status(200).json({
                    message: "Berhasil menghapus data",
                    body: users
                })
                return next("route")
            }
        }
        res.status(404).json({
            message:"user tidak ditemukan"
        })
    }
)



module.exports = router;