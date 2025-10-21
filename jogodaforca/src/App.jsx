import JogoDaForca from "./JogoDaForca";
import Teclado from "./Teclado";
import './index.css';

function App() {

  return (
    <>
    <h1 style={{display:'flex', justifyContent:'center'}}>Jogo Da Forca</h1>
      <JogoDaForca palavra='LEO'/>
    </>
  )
}

export default App
