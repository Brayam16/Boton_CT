import axios from 'axios'

export const getambulanciaRequest = async () =>
    await axios.get('http://localhost:4000/ambulancias');

export const createambulanciaRequest = async(ambulancias) =>
    await axios.post('http://localhost:4000/ambulancias', ambulancias);