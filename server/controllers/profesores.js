'use strict'
import validator from "validator";

import conn from "../db/database.js";
import historial from "./history.js";

const controllersProfesores = {

    registrar : (req, res) =>{

        const {documento, nombre, apellido, email, telefono, materias} = req.body;

        let v_doc = !validator.isEmpty(documento);
        let v_nom = !validator.isEmpty(nombre);
        let v_ape = !validator.isEmpty(apellido);
        let v_eml = !validator.isEmpty(email) && validator.isEmail(email);
        let v_tlt = !validator.isEmpty(telefono);
        let v_mat = !validator.isEmpty(materias);

        if(!v_doc || !v_nom || !v_ape || !v_eml || !v_tlt || !v_mat){
            return res.status(200).send({
                type: "error",
                message: "Error datos invalidos"
            })
        };

        let query = "SELECT documento FROM profesores WHERE documento = ?";
        conn.query(query, documento, (err, result) =>{
            if(err) throw err
            if(result.length >= 1){
                return res.status(200).send({
                    type: "error",
                    message: "Documento ya registrado"
                })
            }

            let query = "INSERT INTO profesores(documento, nombre, apellido, email, telefono, materia_asignada) VALUE(?, ?, ?, ?, ?, ?)";
            conn.query(query, [documento, nombre, apellido, email, telefono, materias], (err) =>{
                if(err) throw err;

                historial(req.userInfo.id, `Registro al docente ${nombre} ${apellido}`);
                return res.status(200).send({
                    message: "Registro exitoso"
                })
            });

        });

    },

    getProfesores: (req, res) =>{

        let query = "SELECT * FROM profesores"
        conn.query(query, (err, result) =>{
            if(err) throw err;

            return res.status(200).send({
                profesores: result
            })
        })
    },

    update: (req, res) =>{

        console.log(req.body)
        const {documento, nombre, apellido, email, telefono, materias} = req.body;
        let v_doc = !validator.isEmpty(documento);
        let v_nom = !validator.isEmpty(nombre);
        let v_ape = !validator.isEmpty(apellido);
        let v_eml = !validator.isEmpty(email) && validator.isEmail(email);
        let v_tlt = !validator.isEmpty(telefono);
        let v_mat = !validator.isEmpty(materias);

        if(!v_doc || !v_nom || !v_ape || !v_eml || !v_tlt || !v_mat){
            return res.status(200).send({
                type: "error",
                message: "Error datos invalidos"
            })
        };

        let query = "UPDATE profesores SET ? WHERE documento = ?"
        conn.query(query, [{documento, nombre, apellido, email, telefono, materia_asignada: materias}, documento], (err) =>{
            if(err) throw err;
            return res.status(200).send({
                message: "Se modifico el registro"
            })
        });
    },

    delete: (req, res) =>{

        const {id} = req.params

    
        let borrar = "DELETE FROM profesores WHERE documento = ?";

        conn.query(borrar, id, (err) =>{
            if(err) throw err;
            
            return res.status(200).send({
                message: "sea borrado el registro con exito"
            });
        });

        
    }
};

export default controllersProfesores;