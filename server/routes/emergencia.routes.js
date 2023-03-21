import { Router } from "express";
import {getEmergencias,getEmergencia} from "../controllers/Emergencia.controlador.js";

const router = Router();

router.get('/emergencia', getEmergencias);
router.get('/emergencia/:id',getEmergencia);


export default router;