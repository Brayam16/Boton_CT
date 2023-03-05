import { createContext, useContext, useState } from 'react'
import {
    getTasksRequest,
    deleteTaskRequest,
    createTaskRequest,
    getTaskRequest,
    updateTaskRequest,
    toggleTaskDoneRequest
} from '../api/Alertas.api';

import {createUserRequest, getUsuariosRequest} from '../api/usuarios.api'
import { TaskContext } from './TaskContext';


export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("UseTasks must be used")
    }
    return context;
};




export const TaskContextProvite = ({ children }) => {//agrupa
    const [tasks, setTasks , users, setUsuario] = useState([]);//recorer arreglo

    async function loadTasks() {
        const response = await getTasksRequest()
        setTasks(response.data);
    };

    async function loadUsuarios() {
        const response = await getUsuariosRequest()
        setUsuario(response.data);
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
      const createUser = async(user) => {
        try {
            await createUserRequest(user)
        } catch (error) {
            console.error(error)
        }
    } 

    const getusuarios = async (id) => {
        try {
            const response = await getUsuariosRequest(id)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    

    return (
        <TaskContext.Provider value={{ tasks, users, loadTasks, deleteTask, createTask, getTask, updateTask,
        toggleTaskDone, createUser, getusuarios, loadUsuarios }}>
            {children}
        </TaskContext.Provider>
    );
}