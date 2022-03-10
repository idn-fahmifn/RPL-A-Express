const express = require('express');

const app = express();
const port = 8000

app.get('/', (req, res) => {
    res.send('Hallo saya belajar express');
});

app.listen(port, function(){
    console.log(`Server berjalan di localhost ${port}`)
})