import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Menu from './pages/Menu';
import AlertasPagina from './pages/AlertasPagina'
import TaskForm from './pages/TaskForm'
import Error404 from './pages/Error404'
import Mapa from './pages/Mapa'
import Graficos from './pages/Graficos'
import FormularioAltaP from './pages/FormularioAltaP'
import FormularioAltaA from './pages/FormularioAltaA'
import FormularioAltaE from './pages/FormularioAltaE'
import PaginaUsuarios from './pages/UsuariosPagina'
import PaginaPolicias from './pages/PoliciaPagina'
import PaginaAmbulancias from './pages/AmbulanciaPagina'
import OpcionesA from './pages/Opcion_de_registro';
import PaginaEstablecimientos from './pages/Establecimientos'
import { TaskContextProvite } from './context/Consultas'
import Menu2 from './pages/Menu2';
import './App.css'


export default function App() {
  return (
      <TaskContextProvite>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/menu2" element={<Menu2/>}/>
          <Route exact path='/mapa' element={<Mapa />} />
          <Route exact path='/alerta' element={<AlertasPagina />} />
          <Route exact path='/alta' element={<OpcionesA />} />
          <Route exact path='/alta_policia' element={<FormularioAltaP />} />
          <Route exact path='/alta_ambulancia' element={<FormularioAltaA />} />
          <Route exact path='/alta_establecimiento' element={<FormularioAltaE />} />
          <Route exact path='/graficos' element={<Graficos />} />
          <Route exact path='/establecimientos' element={<PaginaEstablecimientos />} />
          <Route exact path='/usuarios' element={<PaginaUsuarios />} />
          <Route exact path='/policias' element={<PaginaPolicias />} />
          <Route exact path='/ambulancias' element={<PaginaAmbulancias />} />
          <Route path='/edit/:id' element={<PaginaUsuarios />} />
          
          <Route path='*' element={<Error404 />} />
        </Routes>
      </TaskContextProvite>
  )
}

