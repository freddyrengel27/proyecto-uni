'use strict'
import validator from "validator";
import bcrypt from "bcrypt-nodejs";
import jwt from "jwt-simple";
import conn from "../db/database.js";
import createToken from "../jwt/createToken.js";
import historial from "./history.js";


const controllersUser = {

    registro: (req, res) =>{

        const {documento, nombre, apellido, email, password} = req.body

        let v_doc = !validator.isEmpty(documento);
        let v_nom = !validator.isEmpty(nombre);
        let v_ape = !validator.isEmpty(apellido);
        let v_ema = !validator.isEmpty(email) && validator.isEmail(email);
        let v_pas = !validator.isEmpty(password);

        if(!v_doc || !v_nom || !v_ape || !v_ema || !v_pas){
            return res.status(200).send({
                type: "error",
                message: "Verifique los campos"
            })
        }

        let query = "SELECT doc_usuario from usuarios WHERE doc_usuario = ?";
        conn.query(query, documento, (err, result) =>{
            if(err) throw err;
            if(result.length >= 1){
                return res.status(200).send({
                    type: "error",
                    message: "Documento de identidad ya registrado"
                })  
            };

            let query = "SELECT email_usuario FROM usuarios WHERE email_usuario = ?";
            conn.query(query, email, (err, result) =>{
                if(err) throw err;
                if(result.length >= 1){
                    return res.status(200).send({
                        type: "error",
                        message: "Email ya registrado"
                    })
                };

                bcrypt.hash(password, null, null, (err, hash) =>{
                    if(err) throw err;
                    const passwordHash = hash;

                    let query = "INSERT INTO usuarios(doc_usuario, nombre_usuario, apellido_usuario, email_usuario, password) VALUES(?, ?, ?, ?, ?)";
                    conn.query(query, [documento, nombre, apellido, email, passwordHash], (err) =>{
                        if(err) throw err;
                        return res.status(200).send({
                            type: "nice",
                            message: "Registro exitoso"
                        })
                    })
                })
                
                

            })

           


        })

        

        
    },

    login: (req, res) =>{

        const {email, password} = req.body;

        let v_ema = !validator.isEmpty(email) && validator.isEmail(email);
        let v_pas = !validator.isEmpty(password);

        if(!v_ema || !v_pas){
            return res.status(200).send({
                type: "error",
                message: "Informacion invalida"
            })
        };

        let query = "SELECT * FROM usuarios WHERE email_usuario = ?";
        conn.query(query, email, (err, result) =>{
            if(err) throw err;
            if(result.length == 0){
                return res.status(200).send({
                    type: "error",
                    message: "Email no encontrado"
                })
            }
            const infoUser = result[0];
            
            bcrypt.compare(password, infoUser.password, (err, check) =>{
                if(err) throw err;
                if(check){ 
        
                    historial(infoUser.id_usuario, "Inicio sesión de usuario")
                    return res.status(200).send({
                        type: "nice",
                        message: "login",
                        token: createToken(infoUser)
                    })
                    
                }

                return res.status(200).send({
                    type: "error",
                    message: "Los datos introducidos no coinciden"
                })
                

            });
            

        });


        
    },

    info: (req, res) =>{

        const {token} = req.body
        console.log(token)
        let secret = "clave-secreta-para-general-un-token-777"

        const payload = jwt.decode(token, secret)
        
        return res.status(200).send({
            info: payload
        })
    }

};

export default controllersUser;
