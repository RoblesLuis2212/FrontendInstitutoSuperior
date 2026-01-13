import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';

const FormularioAlumnos = () => {
    const { register, handleSubmit, reset, formState: { errors }, clearErrors } = useForm();

    const postValidaciones = (data) => {
        console.log(data);
        reset();
    }

    return (
        <section className='container mt-4'>
            <h2>Agregar Alumnos</h2>
            <hr />
            <Form onSubmit={handleSubmit(postValidaciones)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="ej: Juan Manuel"
                        {...register("nombre", {
                            required: "El nombre es un dato obligatorio",
                            minLength: {
                                value: 3,
                                message: "El nombre debe contener minimo 3 caracteres"
                            },
                            maxLength: {
                                value: 50,
                                message: "El nombre debe contener maximo 50 caracteres"
                            }
                        })}
                        onChange={() => clearErrors("nombre")}
                    />
                    <Form.Text className="text-danger">
                        {errors.nombre?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="ej: Perez"
                        {...register("apellido", {
                            required: "El apellido es un dato obligatorio",
                            minLength: {
                                value: 3,
                                message: "El apellido debe contener minimo 3 carateres",
                            },
                            maxLength: {
                                value: 30,
                                message: "El apellido debe contener maximo 30 caracteres"
                            }
                        })}
                        onChange={() => clearErrors("apellido")}
                    />
                    <Form.Text className="text-danger">
                        {errors.apellido?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" placeholder="ej: 45784457"
                        {...register("dni", {
                            required: "El DNI es un dato obligatorio",
                            minLength: {
                                value: 8,
                                message: "El DNI debe contener 8 caracteres"
                            }
                        })}
                        onChange={() => clearErrors("dni")}
                    />
                    <Form.Text className="text-danger">
                        {errors.dni?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="ej: 3863457841"
                        {...register("telefono", {
                            required: "El telefono es un dato obligatorio",
                            minLength: {
                                value: 10,
                                message: "El telefono debe contener minimo 10 caracteres"
                            }
                        })}
                        onChange={() => clearErrors("telefono")}
                    />
                    <Form.Text className="text-danger">
                        {errors.telefono?.message}
                    </Form.Text>
                </Form.Group>
                <Button variant="success" type="submit">
                    Guardar
                </Button>
            </Form>
        </section>
    );
};

export default FormularioAlumnos;