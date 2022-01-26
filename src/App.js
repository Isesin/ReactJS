
import "./App.css";

const product = "E-Commerce"
const welcome = "Bienvenidos"

const styles = {
  welcome: {
    backgroundColor: 'yellow',
    color: 'red',
    border: '10px solid black',
    width: 'auto',
    height: 'auto',
    margin: '5 5px',
    padding: '5',
  },
};

function App() {
  return (
    <div className="App">
      <section className="container">
        <h1 className="title">Mi primer {product}</h1>
        <h2 className="welcome" style={styles.welcome}>{welcome}, disfruten de nuestros servicios!</h2>
      </section>
      <section>
    <p className="texto" style={styles.welcome}> 
    Ponele que me toma el Lorem ipsum pero no! 
    </p>
      </section>
    </div>
  );
}

export default App;
