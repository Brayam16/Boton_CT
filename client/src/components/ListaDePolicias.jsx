import React from "react";
import { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import { useTasks } from "../context/Consultas";
import { useParams, useNavigate } from "react-router-dom";
import "../css/listaDeAlertas.css";
import Modal from "./Modal2";
import imgBorrar from "../media/boton-eliminar.png";
import imgEditar from "../media/editar.png";

function ListaDeUsuarios({ task, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const { getusuario, deleteusuarios, createUser, updateusuarios } = useTasks();

  const [tasks2, setTask2] = useState({
    NombreU: "",
    ApellidosU: "",
    EdadU: "",
    CurpU: "",
    CorreoU: "",
    password: "",
    Registro_Facial: "",
    Fecha_NaU: "",
  })

  const params = useParams();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id_Usuario);
    setIsOpen2(false);
  };
  const Eliminar = async () => {
    deleteusuarios(task.id_Usuario);
    window.location.href = "/usuarios";
  };

  const Modal1 = async () => {
    setIsOpen(true);
  };
  const Modal2 = async () => {
    setIsOpen(false);
    setIsOpen2(true);
  };
  const Modal3 = async () => {
    navigate(`/edit/${task.id_Usuario}`);
    
    setIsOpen3(true);
    
    
      
    

    
  };
  const Modal4 = async () => {
    setIsOpen3(false);
  };
  useEffect(() => {
    const loadUsuarios = async () => {
      if (params.id_Usuario) {
        const task = await getusuario(params.id);

        setTask2({
          NombreU: task.NombreU,
          ApellidosU: task.ApellidosU,
          EdadU: task.EdadU,
          CurpU: task.CurpU,
          CorreoU: task.CorreoU,
          password: task.password,
          Registro_Facial: task.Registro_Facial,
          Fecha_NaU: task.Fecha_NaU,
        })
      }
    };
    loadUsuarios();
  }, []);

  return (
    <>
      <Modal open={isOpen} close={() => setIsOpen(false)}>
        <div className="contenido">
          <h1>Asignar ayuda</h1>
          <label>Numero de placa</label>
          <input type="text" className="btnM" />
          <br></br>
          <label>Numero de patrulla</label>
          <input type="text" className="btnM" />
          <br></br>
          <button className="BtnContinuar" onClick={() => Modal2(true)}>
            continuar
          </button>
        </div>
      </Modal>
      <Modal open={isOpen2} close={() => setIsOpen2(false)}>
        <div className="contenido">
          <h1>Asignar ayuda</h1>
          <label>Numero de Ambulacion</label>
          <input type="text" className="btnM" />
          <br></br>

          <br></br>
          <button
            className="BtnContinuar"
            onClick={() => handleDone(task.done)}
          >
            Confirmar
          </button>
        </div>
      </Modal>
      <Modal open={isOpen3} close={() => setIsOpen3(false)}>
        <div className="titulos">
          <h1>{params.id ? "Editar Tarea" : "Nueva Tarea"}</h1>
          
          <Formik
            initialValues={task}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              console.log(values);
              console.log(params.id);

              if (params.id) {
                console.log("actualizacion");
                await updateusuarios(params.id, values);

                window.location.href = "/usuarios";
              } else {
                
                await createUser(values);
                actions.resetForm();
              }
              

              navigate("/usuarios");
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
       

               {console.log(values)} 
              {console.log(params.id)}
              {console.log(tasks2)}
                <label>Nombre</label>
                <input
                  type="text"
                  name="NombreU"
                  placeholder="Escribe el titulo"
                  onChange={handleChange}
                  value={values.NombreU}
                />
                <label>Apellidos</label>
                <input
                  type="text"
                  name="ApellidosU"
                  placeholder="Escribe el titulo"
                  onChange={handleChange}
                  value={values.ApellidosU}
                />
                <label>EdadU</label>
                <input
                  type="text"
                  name="EdadU"
                  placeholder="Escribe el titulo"
                  onChange={handleChange}
                  value={values.EdadU}
                />
                <label>CurpU</label>
                <input
                  type="text"
                  name="CurpU"
                  placeholder="Escribe el titulo"
                  onChange={handleChange}
                  value={values.CurpU}
                />
                <label>CorreoU</label>
                <input
                  type="text"
                  name="CorreoU"
                  placeholder="Escribe el titulo"
                  onChange={handleChange}
                  value={values.CorreoU}
                />

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Guardar"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
      <table className="conte">
        <tbody>
          <tr className="lista">
           
            <th className='Id'>{task.id_Usuario}</th>
            <th className='name'>{task.NombreU}</th>
            <th className='name'>{task.ApellidosU}</th>
            <th className='nu'>{task.EdadU}</th>
            <th className='name'>2491107481</th>
            <th className='name'>Vespertino</th>
            <th className='nu'>12</th>
            <th className='name'>Disponible</th>

            <td className="btnimg">
              <button
                className="btnimg"
                onClick={() => Modal3(`/edit/${task.id_Usuario}`)}
              >
                <img src={imgEditar} className="img2" />
              </button>
            </td>
            <td className="btnimg">
              <button
                className="btnimg"
                onClick={() => Eliminar(task.id_Usuario)}
              >
                <img src={imgBorrar} className="img1" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

/*

        <span>{task.createAt}</span>

        
 */

export default ListaDeUsuarios;
