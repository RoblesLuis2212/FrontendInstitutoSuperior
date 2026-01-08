import React from 'react';
import Button from 'react-bootstrap/Button';

const ItemAlumnos = () => {
    return (
        <tr>
            <td>1</td>
            <td>Matias</td>
            <td>Mendoza</td>
            <td>787841245</td>
            <td>3863457859</td>
            <td>
                <Button variant="danger" className='me-2'>Eliminar</Button>
                <Button variant="warning">Editar</Button>
            </td>
        </tr>
    );
};

export default ItemAlumnos;