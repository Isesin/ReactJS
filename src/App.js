import React from "react";
import 'semantic-ui-css/semantic.min.css'
import "./App.css";
import Header from "./components/header/Header.js"
import CardComponent from "./components/CardComponents/CardComponent"




/* COMPONENTE DE FUNCION / FUNCIONALES/ COOKS */
/* EXISTEN COMPONENTES DE CLASE TAMBIEN */
/*
const App = () => {
  return (
    <>
      <NavBar mycolor={BlueColor}/>
      <NavBar mycolor={RedColor}/>
      <div className="App">
        <section className="container">
          <h1 className="title">Mi primer {product}</h1>
          <h2 className="welcome" style={styles.welcome}>
            {welcome}, disfruten de nuestros servicios!
          </h2>
          <h3 className="title3">Titulo Relleno</h3>
        </section>
        <section>
          <p className="texto" style={styles.welcome}>
            Ponele que me toma el Lorem ipsum pero no!
          </p>
        </section>
      </div>
    </>
  );
};

export default App; /* EXPORT DEFAULT hace visible la funcion*/

/*
FUNCION DECLARADA:
function foo() {
  return 5
}
*/
/*
EXPRESION FUNCIONAL
const myFunction = () => {
  return 5
}

Y LA LLAMO:
myFunction()
*/

/*COMPONENTES DE CLASE */
/* Tienen estado (estate) y ciclos de vida. */
class App1 extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <Header
          title='Bienvenidos a nuestro Ecommerce'/>
        </div>
        <div className="Cards">
          <CardComponent
          name="Jorge"
          description="Jorge es la Card 1"/>
          <CardComponent
          name= "Raul"
          description="Raul es la Card 2"/>
          <CardComponent
          name= "Roberto"
          description="Roberto es la Card 3"/>
        </div>
      </>
    );
  }
}

export default App1;
