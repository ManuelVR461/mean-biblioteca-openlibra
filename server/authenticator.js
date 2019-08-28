'use strict'

const jwt = require('jsonwebtoken');
const auth = {};

auth.createToken = (req,res,user) => {
    console.log('antes de crear exp');
    const expiresIn = Math.floor(Date.now() / 1000) + (60 * 60)
    const issuer = 'CentralOnline.ca';
    const subject= 'Usuario';

    console.log('token expira en ' + expiresIn + ' segundos');
    return jwt.sign({user},req.app.get('secretKey'),{expiresIn,issuer,subject});   
}

auth.authenticator = (req,res,next) => {
    const token = req.body.token || req.query.token || req.headers['Autorization'];
    if (typeof token !== 'undefined') {
        jwt.verify(token,req.app.get('publicKey') ,(err,decoded) => {
            if(err) {
                return res.json({
                    success: false,
                    message: 'Autentificacion Fallida'
                })
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({success:false,message: 'No existe token'});
    }
}

module.exports = auth;
