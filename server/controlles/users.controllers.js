'use strict'

const userCtrl = {};

const Users = require('../models/users.models');
const auth = require('../authenticator');

userCtrl.loginUser = async (req,res,next)=> {
    // console.log('controller password -> ' + req.body.password);
    await Users.findOne(
        {email:req.body.email.toLowerCase()},
        (err,user)=>{
            // console.log({email:req.body.email,password:req.body.password});
            if(err) throw next(err);

            if(!user) {
                res.json({success:false,message:'Usuario no Encontrado'});
            } else {
                //console.log('si hay user --> ' + user.password);
                if(!user.comparePassword(req.body.password)){
                    res.json({success:false,message:'Password Erronea!'});
                } else {
                    const token = auth.createToken(req,res,
                        {email: user.email, nombre: user.nombre});
                        // console.log(token);
                    res.json({
                        success:true,
                        message:'Bienvenido al Sistema',
                        token
                    })
                }
            }
        }
    )
}

userCtrl.getUsers = async (req,res)=>{
    await Users.find({},(err,users)=>{
        if(err) throw err;
        res.json(users);
    })
}

userCtrl.userProfile = async (req, res) => {
    await Users.findOne({ email: req.email },
        (err, users) => {
            if (!users)
                return res.status(404).json({ status: false, message: 'Usuario No Encontrado.' });
            else
                return res.status(200).json({ status: true});
        }
    );
}

userCtrl.registerUsers = async (req,res) => {    
    const newUser = new Users({
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
        admin:true
    });
    
    await newUser.save((err,user)=>{
        if (err && err.code === 11000) return res.status(409).send('Email ya existe');
        if (err) return res.status(500).send('Error de Servidor');
        return res.status(200).json({ success:true,user});
    });
}

userCtrl.logoutUser = async (req,res) => {

}
module.exports = userCtrl;