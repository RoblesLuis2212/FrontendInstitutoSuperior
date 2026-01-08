import React from 'react';
import Table from 'react-bootstrap/Table';
import ItemAlumnos from './ItemAlumnos';

const TablaAlumnos = () => {
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
                    <ItemAlumnos></ItemAlumnos>
                </tbody>
            </Table>
        </section>

    );
};

export default TablaAlumnos;