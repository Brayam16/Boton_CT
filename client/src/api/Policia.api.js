import axios from 'axios'

export const getpoliciaRequest = async () =>
    await axios.get('http://localhost:4000/policias');

export const createpoliciaRequest = async(policia) =>
    await axios.post('http://localhost:4000/policias', policia);