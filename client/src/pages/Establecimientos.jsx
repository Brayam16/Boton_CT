
import { useEffect, useState } from 'react'
import { getestablecimientosRequest } from '../api/Establecimientos.api'
import '../css/Establecimientos.css'
import Menu2 from './Menu2';


function PaginaEstablecimientos() {

  const [users, setUsuarios] = useState([])
  

  useEffect(() => {
    async function cargarTarea() {
      const response = await getestablecimientosRequest()
      setUsuarios(response.data)
    }
    cargarTarea()
  }, []);


  return (
    <>
     <div className='cont'>
        <h1>Establecimientos</h1>

        <thead>
          <tr className='tituloT'>
            <th className='titu'>No. Establecimientos</th>
            <th className='titu'>Nombre</th>
            <th className='titu'>Encargado</th>
            <th className='titu'>Direccion</th>
            <th className='titu'>Horario</th>
          </tr>
        </thead>


        {
          users.map(usuario => (
            <div key={usuario.id}>
              <tr className='ulli'>
                <td className='usu' id='i'>{usuario.id_Establecimiento}</td>
                <td className='usu'>{usuario.Nombre}</td>
                <td className='usu'>{usuario.Encargado}</td>
                <td className='usu' id='f'>{usuario.Direccion}</td>
                <td className='usu' id='f'>{usuario.Horario}</td>
              </tr>
            </div>

          ))
        }
    </div>
    <Menu2></Menu2>
    </>
   

  )
  

}

export default PaginaEstablecimientos;
