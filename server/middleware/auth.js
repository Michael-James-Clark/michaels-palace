var jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    if (!req.headers['id_token']){
        return res.status(400).send('Please send a valid token with your request!');
    }
    var token = req.headers.id_token;
    jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
        if (err){
            return res.status(400).send('Invalid token');
        }
        req.user = decoded;
        next();
    });
}


/*
    I'm starting off by checking if the JWT token is in the headers, and if it isn't we return from the function with an error message.
    - I then store the token in a variable.
    - After storing it in a variable, jwt.verify decodes the token and checks if it has expired or not.
    - The decoded JWT is then stored in the global req.user variable.
    - next() is used to skip to the next middleware.

*/