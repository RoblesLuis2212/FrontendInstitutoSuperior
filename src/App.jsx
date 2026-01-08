import Footer from "./components/Footer";
import TablaAlumnos from "./components/TablaAlumnos";

function App() {

  return (
    <>
      <main>
        <h1 className="text-center mt-3">Administracion de Alumnos</h1>
        <TablaAlumnos></TablaAlumnos>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App;
