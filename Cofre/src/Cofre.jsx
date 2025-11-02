import { useState } from "react";
import Tecla from "./Tecla"

export default function Cofre({ senha }) {

  const senhaNumerica = senha.split("").map(n => Number(n));

  const [mensagem, setMensagem] = useState('');
  const [tentativas, setTentativas] = useState(3);

  const [Tecla1, setTecla1] = useState(0);
  const [Tecla2, setTecla2] = useState(0);
  const [Tecla3, setTecla3] = useState(0);

  const [bloquear, setBloquear] = useState(false);

  const tecla1 = (contador) => { setTecla1(contador) }
  const tecla2 = (contador) => { setTecla2(contador) }
  const tecla3 = (contador) => { setTecla3(contador) }

  const senhaDigitada = [Tecla1, Tecla2, Tecla3];

  const abrirCofre = () => {

    let T = tentativas;
    let senhaD = senhaDigitada;
    let senhaN = senhaNumerica;

    let comparar = JSON.stringify(senhaD) === JSON.stringify(senhaN);

    if (tentativas == 0) {
      // setBloquear(true);
      setMensagem('Senha Errada!')
    }

    if (comparar) {
      setMensagem("Cofre Aberto!")
      setTentativas(0);
    }
    else {
      setMensagem("Senha Errada!")
      setTentativas(T - 1)
    }
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>

        <Tecla onGuardar={tecla1} />
        <Tecla onGuardar={tecla2} />
        <Tecla onGuardar={tecla3} />

        <button disabled={tentativas === 0} onClick={() => abrirCofre()}>Abrir</button>

      </div>

      <div style={{ textAlign: 'center', padding: '10px', fontSize: '20pt' }}>

        Tentativas: {tentativas} <br />
        {mensagem}

      </div>
    </>
  )


}
