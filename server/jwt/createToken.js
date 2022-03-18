'use strict'
import jwt from "jwt-simple";

const createToken = (user) =>{
    const payload = {
        id: user.id_usuario,
        documento: user.doc_usuario,
        nombre: user.nombre_usuario,
        apellido: user.apellido_usuario,
        email: user.email_usuario
    };
    return jwt.encode(payload, "clave-secreta-para-general-un-token-777");
};

export default createToken;