
import { useEffect } from 'react'
import ListaDeAlertas from '../components/ListaDeAlertas';/////
import { useTasks } from '../context/Consultas';
import '../css/AlertasPagina.css'
import Menu2 from './Menu2';
import imgIcono from '../media/editar.png'

function AlertasPagina() {

  const { tasks, loadTasks} = useTasks();

  useEffect(() => {
    loadTasks();
    
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>no hay alertas</h1>
    return tasks.map(task => (
      <ListaDeAlertas task={task} key={task.id} />
    ))
  }

  return (
    <>
      <div className="icon">
        <ul>
          <li><div className='ContenedorLi'><img src={imgIcono} className="imgIcono" /><p id='MensajeP'>Policia</p></div></li>
          <li>Ambulanica</li>
          <li>Atendido</li>
          <li>Atendiendo</li>
          <li>Sin atender</li>
        </ul>
      </div>
      <div className="contenedo">

        <thead className='titulos'>

          <tr>
            <th className='nu'></th>
            <th className='nu'></th>
            <th className=''></th>
            <th className='nuA'>Alerta</th>
            <th className='usus'></th>

            <th className='nuA'>Atencion</th>
            <th className='esta'>Estado</th>
            <th className='esta'>Tipo</th>
            

          </tr>
        </thead>
        {renderMain()}
      </div>
      <Menu2></Menu2>
      
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
 
</>
    
  )
}

export default AlertasPagina;
