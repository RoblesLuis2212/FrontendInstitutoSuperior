import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ItemAlumnos from './ItemAlumnos';
import { listarAlumnosAPI } from '../helpers/queries';

const TablaAlumnos = () => {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        obtenerAlumnos();
    }, [])

    const obtenerAlumnos = async () => {
        const respuesta = await listarAlumnosAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log(datos);
            setAlumnos(datos);
        }
    }
    return (
        <section className='container'>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map((itemAlumno) => (
                        <ItemAlumnos itemAlumno={itemAlumno} setAlumnos={setAlumnos} key={itemAlumno.id}></ItemAlumnos>
                    ))}
                </tbody>
            </Table>
        </section>

    );
};

export default TablaAlumnos;