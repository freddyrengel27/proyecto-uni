'use strict'
import conn from "../db/database.js"

const bitacora = (req, res) =>{

    const fechas = req.params.fechas.split(":");
    

    let query = "SELECT historial.*, usuarios.nombre_usuario, usuarios.apellido_usuario FROM historial INNER JOIN usuarios ON historial.id_user = usuarios.id_usuario WHERE historial.fecha BETWEEN ? AND ? ORDER BY historial.fecha DESC";
  
    conn.query(query, [fechas[0], fechas[1]], (err, result) =>{
        if(err) throw err;

        return res.status(200).send({
            type: "nice",
            bitacora: result,
        });
    });
};

export default bitacora;