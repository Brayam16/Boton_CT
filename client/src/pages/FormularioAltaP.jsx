import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { useTasks } from '../context/Consultas';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu2 from './Menu2';
import '../css/FormularioAlta.css';
function FormularioAlta() {
    const { createPolicia, tasks } = useTasks();
    const [user] = useState({
        NombresPo: "",
        ApellidosPo:"",
        EdadPo: "",
        TelefonoPo: "",
        PasswordPo: "",
        CorreoPo:"",
        CurpPo: "",
        TurnoPo: "",
        Numero_Patrulla: "",
    })
    const params = useParams();
    const navigate = useNavigate();
    return (
        <div className="contenedorR">
            <Formik
                initialValues={user}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);

                    await createPolicia(values);
                    actions.resetForm();
                    navigate("/policias")

                }}

            >


                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="contenedorA">

                            <div className="section1">


                                <div className="lu">
                                    <label className="nomm">Nombre(s)</label>
                                    <input type="text" name="NombresPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.NombresPo}
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Apellidos</label>
                                    <input type="text" name="ApellidosPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.ApellidosPo}
                                    />
                                </div>

                                <div className="lu">
                                    <label className="nomm">Edad</label>
                                    <input type="number" name="EdadPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.EdadPo}
                                    />
                                </div>

                                <div className="lu">
                                    <label className="nomm">Telefono</label>
                                    <input type="text" name="TelefonoPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.TelefonoPo}
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Contraseña</label>
                                    <input type="text" name="PasswordPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.PasswordPo}
                                    />
                                </div>
                                

                               

                                
                            </div>

                            <div className="section1">


                                <div className="lu">
                                    <label className="nomm">Correo</label>
                                    <input type="text" name="CorreoPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.CorreoPo}
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Curp</label>
                                    <input type="text" name="CurpPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.CurpPo}
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Turno</label>
                                    <input type="text" name="TurnoPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.TurnoPo}
                                    />
                                </div>

                                <div className="lu">
                                    <label className="nomm">Numero de Patrulla</label>
                                    <input type="password" name="Numero_Patrulla" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.Numero_Patrulla}
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