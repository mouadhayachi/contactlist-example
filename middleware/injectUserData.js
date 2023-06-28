const jwt = require("jsonwebtoken");

function injectUserData(req, res, next) {
    const token = req.headers["x-access-token"];
    // const authHeader = req.headers["authorization"]; 
    // const userToken = req.headers.get('Authorization');

    if (token === null) { // is empty
        req.customerId = null;
        req.customerEmail = null;

        next();
    } else {
        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err && err.name == "TokenExpiredError") {
                return res.status(401).send({ success: false, code: 'access_token_expired', message: 'Token expired' });
            } else if (err) {
                return res.status(401).send({ success: false, code: 'invalid_token_expired', message: 'Failed to authenticate token' });
            }
            req.customerEmail = decoded.email;
            req.customerId = decoded.id;

            next();
        })
    }
}

module.exports = injectUserData;