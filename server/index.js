import express from "express";
import cors from 'cors';
import { dirname, join } from 'path';
import { fileURLToPath } from "url";
import { PORT } from "./config.js";

import indexRoutes from './routes/index.routes.js';

import usuariosRoutes from './routes/usuarios.routes.js';
////
import EstablecimientoRoutes from './routes/establecimiento.routes.js';
import AlertasRoutes from './routes/alertas.routes.js';
import AmbulanciasRoutes from './routes/ambulancia.routes.js';
import PoliciasRoutes from './routes/Policia.routes.js';
 
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());

app.use(express.json());


app.use(indexRoutes);

app.use(usuariosRoutes);
app.use(EstablecimientoRoutes);
app.use(AlertasRoutes);
app.use(AmbulanciasRoutes);
app.use(PoliciasRoutes);

app.use(express.static(join(__dirname, '../client/dist')));

app.listen(PORT);
console.log(`Server running ${PORT}`);
