import axios from 'axios'

export const getEmergenciasRequest = async () =>
    await axios.get('http://localhost:4000/emergencia');

export const getEmergenciaRequest  = async(id) =>
    await axios.get(`http://localhost:4000/emergencia/${id}`);
