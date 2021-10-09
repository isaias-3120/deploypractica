import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  const temas = ["Tipos de componentes", "Contenedores", "Usar mas de un componente","Funciones","Props","Prop-Types","DefaultProps"];
  return (
    <div className="App">
      <Banner
      />

      <Header/>

      <Banner
        texto1="8 de octubre de 2021"
      />

      <Body
        practica= "Práctica 1 - Unidad 2"
        temas={temas}
      />

      <Footer
        pie={<p>Copyright &copy; Todos los derechos reservados </p>}
      />


    </div>
  );
}

export default App;
