import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { useTasks } from '../context/Consultas';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu4 from './Menu4';
import '../css/FormularioAlta.css'


function FormularioAlta() {
    const { createUser, users } = useTasks();
    const [user] = useState({
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
        tipo: "",
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

                    await createUser(values);
                    actions.resetForm();
                    navigate("/usuarios")

                }}

            >


                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="contenedorA">

                            <div className="section1">


                                <div className="lu">
                                    <label className="nomm">Nombre(s)</label>
                                    <input type="text" name="nombre" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.nombre}
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Fecha de Nacimiento</label>
                                    <input type="date" name="nacimiento" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.nacimiento}
                                    />
                                </div>

                                <div className="lu">
                                    <label className="nomm">Edad</label>
                                    <input type="number" name="edad" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.edad}
                                    />
                                </div>

                                <div className="lu">
                                    <label className="nomm">CURP</label>
                                    <input type="text" name="CURP" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.CURP}
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Correo Electrónico</label>
                                    <input type="email" name="correo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.correo}
                                    />
                                </div>

                                <div className="lu">
                                    <label className="nomm">Teléfono</label>
                                    <input type="number" name="telefono" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.telefono}
                                    />
                                </div>

                                
                            </div>

                            <div className="section1">


                                <div className="lu">
                                    <label className="nomm">Apellidos</label>
                                    <input type="text" name="apellidos" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.apellidos}
                                    />
                                </div>

                                <div className="lue">
                                    <label className='nomm'>Puesto</label>
                                    <select type="selection" name="tipo" 
                                        onChange={handleChange}
                                        value={values.tipo} >
                                        <option value="#"></option>
                                        <option value="policia">Policía</option>
                                        <option value="paramedico">Paramedico</option>
                                    </select>
                                </div>

                               
                                <div className="lu">
                                    <label className="nomm">Numero de unidad</label>
                                    <input type="number" name="numero" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.numero}
                                    />
                                </div>

                                <div className="lu">
                                    <label className="nomm">Contraseña</label>
                                    <input type="password" name="contraseña" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.contraseña}
                                    />
                                </div>
                               
                                <div className="lu">
                                    <label className="nomm">Repetir Contraseña</label>
                                    <input type="password" name="repetiContraseña" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.repetiContraseña}
                                    />
                                </div>
                            </div>


                            <button className='btnn' type='submit' disabled={isSubmitting}>
                                {isSubmitting ? "Guardando..." : "Guardar"}
                            </button>
                            
                            
                            
                        </div>
                        <Menu4></Menu4>
                        
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