'use strict'
import conn from "../db/database.js";

const exists = (tabla, campo, info) =>{

    let query = `SELECT ${campo} FROM ${tabla} WHERE ${campo} = ?`;
    return conn.query(query, info, (err, result) =>{
        if(err) throw err
        if(result.length >= 1) return false
        return result
    })

}

export default exists;