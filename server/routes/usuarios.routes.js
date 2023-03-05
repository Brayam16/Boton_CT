import { Router } from "express";
import {
    getUsuarios,
    createUser
} from "../controllers/usuario.controlador.js"

const router = Router();


router.get('/usuarios', getUsuarios);
router.post('/usuarios', createUser);


export default router;