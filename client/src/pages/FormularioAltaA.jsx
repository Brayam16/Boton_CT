import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { useTasks } from '../context/Consultas';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu2 from './Menu2';
import '../css/FormularioAlta.css';
function FormularioAlta() {
    const { createAmbulancia, tasks } = useTasks();
    const [user] = useState({
        NombresP: "",
        ApellidosP:"",
        TelefonoP: "",
        PasswordP: "",
        CorreoP:"",
        Turno: "",
        Numero_Ambulancia: "",
    })
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const loadTask = async () => {
            if(params.id){
                const task = await getTask(params.id);
                setTask({
                    NombresP: task.NombresP,
                    ApellidosP: task.ApellidosP,
                    TelefonoP: task.TelefonoP,
                    PasswordP: task.PasswordP,
                    CorreoP: task.CorreoP,
                    Turno:task.Turno,
                    Numero_Ambulancia:task.Numero_Ambulancia,

                });
            }
        };
        loadTask();
        
    }, []);
    return (
        <div className="contenedorR">
            <Formik
                initialValues={user}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);

                    await createAmbulancia(values);
                    actions.resetForm();
                    navigate("/ambulancias")

                }}

            >


                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="contenedorA">

                            <div className="section1">


                                <div className="lu">
                                    <label className="nomm">Nombre(s)</label>
                                    <input type="text" name="NombresP" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.NombresP}
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Apellidos</label>
                                    <input type="text" name="ApellidosP" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.ApellidosP}
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Telefono</label>
                                    <input type="text" name="TelefonoP" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.TelefonoP}
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Contraseña</label>
                                    <input type="text" name="PasswordP" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.PasswordP}
                                    />
                                </div>
                                  
                            </div>

                            <div className="section1">
                                


                                <div className="lu">
                                    <label className="nomm">Correo</label>
                                    <input type="text" name="CorreoP" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.CorreoP}
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Turno</label>
                                    <input type="text" name="Turno" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.Turno}
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Numero de Ambulancia</label>
                                    <input type="text" name="Numero_Ambulancia" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.Numero_Ambulancia}
                                    />
                                </div>

                                

                               
                               

                               
                            </div>


                            <button className='btnn' type='submit' disabled={isSubmitting}>
                                {isSubmitting ? "Guardando..." : "Guardar"}
                            </button>
                            
                            
                            
                        </div>
                        <Menu2></Menu2>
                        
                    </Form>
                )}
            </Formik>
            
        </div>
    )
}

export default FormularioAlta;



/**
    const { createUser, getUsuarios } = useUsuarios();
    const [user, editarUsuario] = useState({
        nombre: "",
        nacimiento: "",
        CURP: "",
        correo: "",
        contraseña: "",
        apellidos: "",
        edad: "",
        numero: "",
        telefono: "",
        repetiContraseña: "",
    })
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const cargarUsuario = async () => {
            if (params.id) {
                const user = await getUsuarios(params.id);
                editarUsuario({
                    nombre: user.nombre,
                    nacimiento: user.nacimiento,
                    CURP: user.CURP,
                    correo: user.correo,
                    contraseña: user.contraseña,
                    apellidos: user.apellidos,
                    edad: user.edad,
                    numero: user.numero,
                    telefono: user.telefono,
                    repetiContraseña: user.repetiContraseña,
                });
            }

        };
        cargarUsuario();

    }, []); 
    
    enableReinitialize={true}
    
     if (params.id) {
                        await updateUSer(params.id, values);
                    }
                    {
                        await createUser(values);
                        actions.resetForm();
                    }
                    navigate("/usuarios");
                    editarUsuario({
                        nombre: "",
                        nacimiento: "",
                        CURP: "",
                        correo: "",
                        contraseña: "",
                        apellidos: "",
                        edad: "",
                        numero: "",
                        telefono: "",
                        repetiContraseña: "",
                    });
                }}*/