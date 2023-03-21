import React from 'react'
import {useState} from 'react'
import { useTasks } from '../context/Consultas';
import { useNavigate } from 'react-router-dom';
import '../css/listaDeAlertas.css'
import Modal from './Modal2'
import imgBorrar from '../media/boton-eliminar.png'
import imgEditar from '../media/editar.png'

function ListaDeAlertas({ task, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const {toggleTaskDone, getusuarios } = useTasks()
  const navigate = useNavigate()

  const handleDone = async () => {
    await toggleTaskDone(task.id);
    setIsOpen2(false);
    
  }
  const Modal1 = async () => {
    
    setIsOpen(true);
  }
  const Modal2 = async () => {
    setIsOpen(false);
    setIsOpen2(true);
  }


  

  return (
    
    <>
    <Modal open = {isOpen} close = { () => setIsOpen(false)} >
      
    <div className='contenido'>
                    <h1>Asignar ayuda</h1>
                    <label >Numero de placa</label>
                    <input type="text" className='btnM' />
                    <br></br>
                    <label >Numero de patrulla</label>
                    <input type="text" className='btnM'/>
                    <br></br>
                    <button className='BtnContinuar' onClick={() => Modal2(true)}>continuar</button>
                    
    </div>
      </Modal>
      <Modal open = {isOpen2} close = { () => setIsOpen2(false)} >
      
    <div className='contenido'>
                    <h1>Asignar ayuda</h1>
                    <label >Numero de Ambulacion</label>
                    <input type="text" className='btnM' />
                    <br></br>
                    
                    <br></br>
                    <button className='BtnContinuar' onClick={() => handleDone(task.done)}  >Confirmar</button>
                    
    </div>
    </Modal>
      <table className='conte'>


        <tbody>

          <tr className='lista'>

            <td className='name'>Emergencia del usuario</td>
            <td className='nu'>{task.	id_Usuario_E }</td>
            <td className='ususL'>Atendida por el usuario</td>

            <td className='nu'>{<span className='simbolo'>{task.id_Ambulacia != 16 ?  task.id_Ambulacia : task.id_Policia != 16 ?  task.id_Policia :'no se atiende'}</span>}</td>
            <td className='estaC'><span className='simbolo'>{task.Estado != 1 ? "No se atendio" : task.Estado != 2 ? "Se atendio" :task.Estado != 3 ? "E3" :"no"}</span></td>
            <td className='estaL'><span className='simbolo'>{task.Tipo != 1 ? "Policia" : "Ambulancia"}</span></td>
            <td className='btnL'><button className='btnLA' id='abrirModal' onClick = {() => Modal1(true) }>Atender</button></td>
            
            <td className='btnimg'><button className='btnimg' onClick={() => navigate(`/edit/${task.id}`)}><img src={imgEditar} className="img2" /></button></td>
            <td className='btnimg'><button  className='btnimg' onClick={() => deleteTask(task.id)}><img src={imgBorrar} className="img1" /></button></td>
          </tr>
        </tbody>


      </table>
    </>
  )
}

/*

        <span>{task.createAt}</span>

        
 */

export default ListaDeAlertas