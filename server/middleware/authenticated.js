'use strict'

import jwt from "jwt-simple";

const authentication = (req, res, next) =>{

    const {authorization} = req.headers;
    const token = authorization.replace(/["']+/g, "");
    try{
        let secret = "clave-secreta-para-general-un-token-777";
        const payload = jwt.decode(token, secret);
        req.userInfo  = payload
    }catch(err){
        return res.status(404).send({
            message: "authorizacion invalidad"
        })
    }

    

    next();
};

export default authentication;