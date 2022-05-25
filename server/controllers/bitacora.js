'use strict'
import conn from "../db/database.js"

const bitacora = (req, res) =>{

    let query = "SELECT historial.*, usuarios.nombre_usuario, usuarios.apellido_usuario FROM historial INNER JOIN usuarios ON historial.id_user = usuarios.id_usuario ORDER BY historial.fecha ASC";
    conn.query(query, (err, result) =>{
        if(err) throw err;

        return res.status(200).send({
            type: "nice",
            bitacora: result,
        });
    });
};

export default bitacora;