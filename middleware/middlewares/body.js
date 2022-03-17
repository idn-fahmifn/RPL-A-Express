// function cek object jika kosong
function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
}

module.exports = (req, res, next) => {
    // jika object req.body kosong, maka aakan skip middleware ini
    if (isEmpty(req.body)) next(); 
    // jika object req.body tidak kosong, maka akan mengambil data dari req.body
    console.log("BODY", req.body);
    next();
}