'use strict'

import conn from "../db/database.js"


const controllersCarreras = {

    getcarreras: (req, res) =>{
        console.log(req.userInfo)
        let query = "SELECT * FROM carreras"
        conn.query(query, (err, result) =>{
            if(err) throw err

            return res.status(200).send({
                carreras: result
            })

        });
    },

};

export default controllersCarreras;