import { pool } from "../db.js"
//Busqueda de todos lodos los registros

export const getEmergencias = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM hacer_usu_emergen HE  JOIN usuario US ON HE.id_Usuario = US.id_Usuario JOIN emergencia EM ON HE.id_Emergencia = EM.id_Emergencia JOIN policia PO On HE.id_Policia = PO.id_Policia JOIN ambulancia AM ON HE.id_Ambulacia  = AM.id_Ambulacia  ORDER BY HE.id_Usuario_E   ASC ");
        res.json(result);

    }catch(error){
        return res.status(500).json({ message: error.message});
    }
    
}
//Busqueda por id
export const getEmergencia = async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM emergencia WHERE 	id_Emergencia  = ?",[req.params.id] );
        

        if (result.length === 0)
            return res.status(404).json({ message: "Task not emergencia "});
        
        res.json(result[0]);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

