import fs from "fs/promises";
import mysqldump from "mysqldump";
import moment from "moment";

const respaldo = async (req, res) =>{

    const direc = `./download/respaldo-${moment().unix()}.sql`

    const result = await mysqldump({
        connection:{
            host: "localhost",
            user: "root",
            password: "",
            database: "proyecto"
        },
        dumpToFile: direc
    });

    res.download(direc);


    await fs.unlink(direc);

    
};

export default respaldo