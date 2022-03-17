module.exports = (req, res, next) => {
    // akan menampikan data yang telah disaring oleh bodyParser
    console.log("METHOD", req.method);
    console.log("URL", req.path);
    console.log("Headers", req.headers);

    next()
}
