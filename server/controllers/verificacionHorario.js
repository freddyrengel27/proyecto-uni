'use strict'
import conn from "../db/database.js";

const verificacionHorario = async ({documento}) =>{

        return new Promise((resolve, reject) =>{
        let query = "SELECT * FROM data_horarios WHERE id_profesor = ?";
        conn.query(query, documento, (err, result) =>{
            if(err) return reject(err);
            return resolve(result)
        })
    })

}

export default verificacionHorario;