import {Router} from "express";
import controllersCarreras from "../controllers/carreras.js"
import controllersPensum from "../controllers/pensum.js";
import controllersUser from "../controllers/user.js";
import controllersProfesores from "../controllers/profesores.js";
import authentication from "../middleware/authenticated.js";
import controllerHorario from "../controllers/horarios.js";
import bitacora from "../controllers/bitacora.js";
import controllersUrlHorario from "../controllers/urlHorario.js";
import multer from "multer";
import respaldo from "../controllers/respaldo.js";

const upload = multer({dest: "./uploads"});



const router = Router();

//User
router.post("/registro", controllersUser.registro);
router.post("/login", controllersUser.login);
router.post("/info", controllersUser.info);

//carreras
router.get("/getcarreras", authentication, controllersCarreras.getcarreras);

//Pensum
router.post("/getpensum", authentication, controllersPensum.getPensum);

//Profesores
router.post("/addprofesor", authentication, controllersProfesores.registrar);
router.get("/getprofesores", authentication, controllersProfesores.getProfesores);
router.put("/updateprofe", authentication, controllersProfesores.update);
router.delete("/deleteprof/:id", authentication, controllersProfesores.delete);

// Horario
router.post("/addhorario", authentication, controllerHorario.save);

router.post("/sabehorario", upload.single("dataHorario"), controllersUrlHorario.save);
router.get("/geturlhorario", authentication, controllersUrlHorario.get);
router.post("/descarga", controllersUrlHorario.PDFdownload)

router.get("/getbitacora/:fechas", bitacora);

// RESPALDO

router.post("/respaldo", respaldo);

export default router;