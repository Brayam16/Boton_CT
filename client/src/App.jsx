import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Menu from './pages/Menu';
import AlertasPagina from './pages/AlertasPagina'
import TaskForm from './pages/TaskForm'
import Error404 from './pages/Error404'
import Mapa from './pages/Mapa'
import Graficos from './pages/Graficos'
import FormularioAlta from './pages/FormularioAlta'
import PaginaUsuarios from './pages/UsuariosPagina'
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
          <Route exact path='/usuarios' element={<PaginaUsuarios />} />
          <Route exact path='/alerta' element={<AlertasPagina />} />
          <Route exact path='/alta' element={<FormularioAlta />} />
          <Route exact path='/graficos' element={<Graficos />} />
          <Route exact path='/new' element={<TaskForm />} />
          <Route exact path='/edit/:id' element={<TaskForm />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </TaskContextProvite>
  )
}

