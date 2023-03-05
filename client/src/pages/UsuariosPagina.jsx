
import { useEffect, useState } from 'react'
import { getUsuariosRequest } from '../api/usuarios.api'
import Menu3 from './Menu3';
import '../css/UsuarioPagina.css'


function PaginaUsuarios() {

  const [users, setUsuarios] = useState([])
  

  useEffect(() => {
    async function cargarTarea() {
      const response = await getUsuariosRequest()
      setUsuarios(response.data)
    }
    cargarTarea()
  }, []);


  return (
    <>
    <div className='cont'>
        <h1>Usuarios</h1>

        <thead>
          <tr className='tituloT'>
            <th className='titu'>No. Usuario</th>
            <th className='titu'>Nombre</th>
            <th className='titu'>Tipo de Usuario</th>
          </tr>
        </thead>


        {
          users.map(usuario => (
            <div key={usuario.id}>
              <tr className='ulli'>
                <td className='usu' id='i'>{usuario.id}</td>
                <td className='usu'>{usuario.nombre}</td>
                <td className='usu' id='f'>{usuario.tipo}</td>
              </tr>
            </div>

          ))
        }
    </div>
    
    
    <Menu3></Menu3>
    </>
    
    

  )

}

export default PaginaUsuarios;
