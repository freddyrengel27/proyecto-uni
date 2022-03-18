import {Router} from "express";
import controllersCarreras from "../controllers/carreras.js"
import controllersPensum from "../controllers/pensum.js";
import controllersUser from "../controllers/user.js";
import controllersProfesores from "../controllers/profesores.js";
import authentication from "../middleware/authenticated.js";
const router = Router();

//User
router.post("/registro", controllersUser.registro);
router.post("/login", controllersUser.login);
router.post("/info", controllersUser.info);

//carreras
router.get("/getcarreras", authentication, controllersCarreras.getcarreras);

//Pensum
router.post("/getpensum", controllersPensum.getPensum);

//Profesores
router.post("/addprofesor", controllersProfesores.registrar);
router.get("/getprofesores", controllersProfesores.getProfesores);
router.put("/updateprofe", controllersProfesores.update);
router.delete("/deleteprof/:id", controllersProfesores.delete);


export default router;