import { createContext, useContext, useState } from 'react'
import {
    getTasksRequest,
    deleteTaskRequest,
    createTaskRequest,
    getTaskRequest,
    updateTaskRequest,
    toggleTaskDoneRequest,
} from '../api/Alertas.api';
import {getAlertasRequest,} from '../api/Alertas.api'
import {createUserRequest, getUsuariosRequest,toggleUsuariosRequest,deleteUsuariosRequest,getUsuarioRequest,updateUserRequest} from '../api/usuarios.api'
import { TaskContext } from './TaskContext';
import {
    getestablecimientosRequest,
    createestablecimientoRequest,
} from "../api/Establecimientos.api";
import{
    createpoliciaRequest,getpoliciaRequest
}from "../api/Policia.api"
import{
    createambulanciaRequest
} from "../api/Ambulancia.api";


export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("UseTasks must be used")
    }
    return context;
};




export const TaskContextProvite = ({ children }) => {//agrupa
    const [tasks, setTasks,tasks2, setTasks2  ] = useState([]);//recorer arreglo

    async function loadTasks() {
        const response = await getAlertasRequest()
        setTasks(response.data);
    };

    async function loadUsuarios() {
        const response = await getUsuariosRequest()
        setTasks(response.data);
        
    };
    async function loadUsuarios2() {
        const response = await getUsuariosRequest()
        setTasks2(response.data);
    };
    async function loadPolicia() {
        const response = await getestablecimientosRequest();
        setTasks(response.data);
    };
    async function loadEstablecimientos() {
        const response = await getpoliciaRequest();
        setTasks(response.data);
    };



    const deleteTask = async (id) => {
        try {
            const response = await deleteTaskRequest(id);
            setTasks(tasks.filter(task => task.id !== id))//buscar el que sea diferente

        } catch (error) {
            console.error(error)
        }
    };


    const createTask = async (task) => {

        try {
            await createTaskRequest(task)
        } catch (error) {
            console.error(error);
        }
    }

  

    const getTask = async (id) => {
        try {
            const response = await getTaskRequest(id)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }



    const updateTask = async (id, newFields) => {
        try {
            const response = await updateTaskRequest(id, newFields)
            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }



    const toggleTaskDone = async(id) => {
        try {
            const taskFound = tasks.find((task) => task.id === id);
            await toggleTaskDoneRequest(id, taskFound.done === 0 ? true: false);
            tasks.map(task => task.id === id ? task.done = task.done === 0 ? 1: 0 : task.done);
            setTasks([...tasks]);
          
        } catch (error) {
            console.error(error);
        }
    }

      //usuarios
      const createUser = async(tasks) => {
        try {
            await createUserRequest(tasks)
        } catch (error) {
            console.error(error)
        }
    } 
    const toggleUserDone = async(id) => {
        try {
            const taskFound = tasks.find((task) => task.id === id);
            await toggleUsuariosRequest(id, taskFound.done === 0 ? true: false);
            tasks.map(task => task.id === id ? task.done = task.done === 0 ? 1: 0 : task.done);
            setTasks([...tasks]);
          
        } catch (error) {
            console.error(error);
        }
    }
    

    const getusuario = async (id_Usuario) => {
        try {
            const response = await getUsuarioRequest(id_Usuario)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }
    const deleteusuarios = async (id) => {
        try {
            const response = await deleteUsuariosRequest(id);
            setTasks(tasks.filter(task => task.id !== id))//buscar el que sea diferente

        } catch (error) {
            console.error(error)
        }
    };

    const updateusuarios = async (id, newFields) => {
        try {
            const response = await updateUserRequest(id, newFields)
            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }
    
    //
    
    //Establecimientos
    
    const createEstablecimiento = async (tasks) => {
        try {
            await createestablecimientoRequest(tasks);
        } catch (error) {
            console.error(error);
        }
    };
    //Ambulancia
    const createAmbulancia = async (tasks) => {
        try {
            await createambulanciaRequest(tasks);
        } catch (error) {
            console.error(error);
        }
    };
    //Policia
    const createPolicia = async (tasks) => {
        try {
            await createpoliciaRequest(tasks);
        } catch (error) {
            console.error(error);
        }
    };

    

    return (
        <TaskContext.Provider value={{ tasks,tasks2,  loadTasks,loadEstablecimientos,loadPolicia, deleteTask, createTask, getTask, updateTask,updateusuarios,
        toggleTaskDone, createUser, getusuario, loadUsuarios,loadUsuarios2,createEstablecimiento,createAmbulancia,createPolicia,toggleUserDone,deleteusuarios }}>
            {children}
        </TaskContext.Provider>
    );
}