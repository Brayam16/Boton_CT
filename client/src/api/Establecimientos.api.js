import axios from 'axios'

export const getestablecimientosRequest = async () =>
    await axios.get('http://localhost:4000/establecimientos');

export const createestablecimientoRequest = async(Establecimiento) =>
    await axios.post('http://localhost:4000/establecimientos', Establecimiento);