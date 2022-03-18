'use strict'
import mysql from "mysql";

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "proyecto"
});

conn.connect((err) =>{
    if(err) throw err;
    console.log(`database conectada ${conn.threadId}`)
})

export default conn;