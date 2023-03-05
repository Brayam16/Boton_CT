import { pool } from "../db.js"


export const getUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM alta");
        res.json(result);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}


export const createUser = async (req, res) => {
    try {
        const { nombre, nacimiento, CURP, correo, contraseña, apellidos, edad, numero, telefono, repetiContraseña,tipo } = req.body;
        const [result] = await pool.query('INSERT INTO alta(nombre, nacimiento, CURP, correo, contraseña, apellidos, edad, numero, telefono, repetiContraseña, tipo) VALUES (?, ?, ?, ?, ?, ?, ? , ?, ?, ?, ?)',
            [nombre, nacimiento, CURP, correo, contraseña, apellidos, edad, numero, telefono, repetiContraseña, tipo]
        );
        res.json({
            id: result.insertId,
            nombre,
            nacimiento,
            CURP,
            correo,
            contraseña,
            apellidos,
            edad,
            numero,
            telefono,
            repetiContraseña,
            tipo
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
