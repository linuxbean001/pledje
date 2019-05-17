function get(req, res, next) {
    return new Promise((resolve, reject) => {
        res.send("Sample Controller");
    });
}

module.exports = {
    get: get
}