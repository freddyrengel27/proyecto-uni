import mysqldump from "mysqldump";


const uploadRespaldo = async (req, res) =>{

    await mysqldump({
        connection:{
            host: "localhost",
            user: "root",
            password: "",
            database: "proyecto"
        },
    });


};

export default uploadRespaldo