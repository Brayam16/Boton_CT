import React from 'react'
import { useTasks } from '../context/Consultas';
import { useNavigate } from 'react-router-dom';

function ListaDeUsuarios({usuario}){




  return (
    <>
      <div className='tareas'>
        <h1>Usuarios</h1>
       
              <ul className='ulli'>
                <li className='usu'>{usuario.id}</li>
                <li className='usu'>{usuario.nombre}</li>
                <li className='usu'>{usuario.tipo}</li>
              </ul>

      </div>
    </>
  )
}

export default ListaDeUsuarios