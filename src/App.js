import logo from "./logo.svg";
import "./App.css";
import React from "react";
import MyComponent from "./components/MyComponent";
import Properties from "./components/Properties";
import Estado from "./components/Estado";
import RenderizadoCondicional from './components/RenderizadoCondicional.js'
import RenderizadoElementos from './components/RenderizadoElementos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <MyComponent msg="Pasando Props" />
          <hr />
          <Properties
            msg="Propiedades"
            numero={10}
            boleano={true}
            arreglo={[1, 2, 3, 4, 5, 6]}
            objeto={{
              nombre: "edwin",
              apellido: "molina",
            }}
            elementoreact={<i>Elemento de React</i>}
            funcion={(num) => {
              num = num * num * num;
              return num;
            }}
            componentereact={<MyComponent msg="Componente de React" />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos numeros={[1, 2, 3, 4, 5, 6]}/>
        </section>
      </header>
    </div>
  );
}

export default App;
