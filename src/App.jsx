import { BrowserRouter, Link, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import TablaAlumnos from "./components/TablaAlumnos";
import Button from 'react-bootstrap/Button';
import FormularioAlumnos from "./components/FormularioAlumnos";

function App() {

  return (
    <>
      <BrowserRouter>
        <main className="container">
          <Routes>
            <Route path="/" element={
              <>
                <div className="d-flex justify-content-center align-items-center gap-3 p-3">
                  <h1 className="text-center mt-2 flex-grow-1">Administracion de Alumnos</h1>
                  <Button as={Link} variant="success me-1" to={"/agregar"}>Agregar</Button>
                </div>
                <TablaAlumnos></TablaAlumnos>
              </>
            }></Route>
            <Route path="/agregar" element={<FormularioAlumnos />}>
            </Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter >
    </>
  )
}

export default App;
