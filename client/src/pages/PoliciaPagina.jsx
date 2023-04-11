
import { useEffect } from 'react'
import ListaDePolicias from '../components/ListaDePolicias';/////
import { useTasks } from '../context/Consultas';
import '../css/UsuarioPagina.css'
import Menu2 from './Menu2';


function PaginaPolicias() {
  const opcion1 = async () => {
    
    var x =document.getElementById('SelectOpciones').value;
    
    if(x=="Usuarios"){
      console.log('Usuarios');
      window.location.href = "/usuarios";
    }
    if(x=="paramedico"){
      console.log('policia');
      window.location.href = "/ambulancias";
    }
    
    
  }
  const { tasks, loadPolicia} = useTasks();

  useEffect(() => {
    loadPolicia();
    
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1><br></br>No hay Policias</h1>
    if (tasks.id_Policia!=16) {
      return tasks.map(task => (
        <ListaDePolicias task={task} user={task.id_Policia} />
      ))
    }
    console.log(tasks.id_Policia);
    
  }

  return (
    <>
    <select className='Selector' id="SelectOpciones" onClick={() => opcion1()} type="selection" name="tipo"  >
          <option value="">Policías</option>
          <option value="Usuarios">Usuarios</option>
          <option value="paramedico">Paramedicos</option>
        </select>
      <h1>Policias</h1>
            <div className="contenedo">

        <thead className='titulos'>

          <tr>
            <th className='nu'>Identificador</th>
            <th className='name'>Nombre</th>
            <th className='nu'>Apellidos</th>
            <th className='es'></th>
            <th className='nu'>Edad</th>
            <th className='name'>Telefono</th>
            <th className='es'></th>
            <th className='nu'> Turno</th>
            <th className='nu'>No.Patrulla</th>
            <th className='nu'>Estado</th>
            <th className='name'></th>
            

            

          </tr>
        </thead>
        <div id="Tabla_Scroll">
        {renderMain()}
        </div>
      </div>
      <Menu2></Menu2>
      
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
 
</>
    
  )
}

export default PaginaPolicias;
