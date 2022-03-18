'use strict'

import conn from "../db/database.js";


const controllersPensum = {

    getPensum: (req, res) =>{
        const {cod} = req.body  
        console.log(cod)
        let query = "SELECT * FROM materias WHERE carrera_id = ?";
        conn.query(query, cod, (err, result) =>{
           if(err) throw err
           result.sort((a, b) =>{
               if(a.semestre < b.semestre){
                   return -1
               }else if(a.semestre > b.semestre){
                    return 1
               }else{
                   return 0
               }
           })

            return res.status(200).send({
                pensum: result
                
            })
        });

        
    },
};


export default controllersPensum;