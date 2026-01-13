import React from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import { eliminarAlumnoAPI, listarAlumnosAPI } from '../helpers/queries';

const ItemAlumnos = ({ itemAlumno, setAlumnos }) => {
    const eliminarAlumno = async () => {
        Swal.fire({
            title: `¿Estas seguro de que deseas eliminar a ${itemAlumno.nombre} ${itemAlumno.apellido}?`,
            text: "¡No podrás revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const respuesta = await eliminarAlumnoAPI(itemAlumno.id);
                if (respuesta.status === 200) {
                    Swal.fire(
                        '¡Eliminado!',
                        'El alumno fue borrado con éxito.',
                        'success'
                    )
                }
                const respuestaAlumnos = await listarAlumnosAPI();
                if (respuesta.status === 200) {
                    const datosAlumnos = await respuestaAlumnos.json();
                    setAlumnos(datosAlumnos);
                } else {
                    alert("Error interlo al eliminar el alumno")
                }
            }
        })
    }
    return (
        <tr>
            <td>{itemAlumno.id}</td>
            <td>{itemAlumno.nombre}</td>
            <td>{itemAlumno.apellido}</td>
            <td>{itemAlumno.dni}</td>
            <td>{itemAlumno.telefono}</td>
            <td>
                <Button variant="danger" className='me-2' onClick={eliminarAlumno}>Eliminar</Button>
                <Button variant="warning">Editar</Button>
            </td>
        </tr>
    );
};

export default ItemAlumnos;