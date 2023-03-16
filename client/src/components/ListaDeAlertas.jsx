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

            <td className='name'>edd</td>
            <td className='nu'>{task.id_Emergencia}</td>
            <td className='ususL'>po</td>

            <td className='nu'>{task.Ubicacion_Origen}</td>
            <td className='estaC'><span className='simbolo'>{task.done == 1 ? "✔" : "✘"}</span></td>
            <td className='estaL'>tipo</td>
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