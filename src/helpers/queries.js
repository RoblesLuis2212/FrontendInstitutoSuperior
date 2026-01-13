const alumnosBackend = import.meta.env.VITE_API_ALUMNOS;

export const listarAlumnosAPI = async () => {
  try {
    const respuesta = await fetch(alumnosBackend);
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const eliminarAlumnoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${alumnosBackend}${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const agregarAlumnoAPI = async (alumno) => {
  try {
    const respuesta = await fetch(alumnosBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(alumno),
    });
    return respuesta;
  } catch (err) {
    console.log(err);
    return null;
  }
};
