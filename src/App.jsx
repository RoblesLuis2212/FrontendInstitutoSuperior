import Footer from "./components/Footer";
import TablaAlumnos from "./components/TablaAlumnos";
import Button from 'react-bootstrap/Button';

function App() {

  return (
    <>
      <main className="container">
        <div className="d-flex justify-content-center align-items-center gap-3 p-3">
          <h1 className="text-center mt-2 flex-grow-1">Administracion de Alumnos</h1>
          <Button variant="success me-1">Agregar</Button>
        </div>
        <TablaAlumnos></TablaAlumnos>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App;
