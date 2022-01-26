import "./App.css";
import NavBar from "./components/NavBar.js";

const product = "E-Commerce";
const welcome = "Bienvenidos";

const styles = {
  welcome: {
    backgroundColor: "yellow",
    color: "red",
    border: "10px solid black",
    width: "auto",
    height: "auto",
    margin: "5 5px",
    padding: "5",
  },
};

/* COMPONENTE DE FUNCION / FUNCIONALES/ COOKS */
/* EXISTEN COMPONENTES DE CLASE TAMBIEN */

function App ()  {
  return (
    <>
      <NavBar/>
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
