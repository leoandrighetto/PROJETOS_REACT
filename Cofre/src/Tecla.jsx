import { useState } from "react"
import adicionar from './assets/adicionar.png';
import remover from './assets/remover.png';
import proibido from './assets/proibido.png';

export default function Tecla({ onGuardar }) {

    const [contador, setContador] = useState(0);

    return <>
        <div style={{ display: 'flex', flexDirection: 'initial', alignItems: 'center', fontSize: '40pt' }}>

            <img src={contador === 0 ? proibido : remover} width={50} height={50} onClick={() => { if (contador <= 0) { undefined } else { let novoContador = contador - 1; setContador(novoContador); onGuardar(novoContador); } }} />
            {contador}
            <img src={contador === 9 ? proibido : adicionar} width={50} height={50} onClick={() => { if (contador >= 9) { undefined } else { let novoContador = contador + 1; setContador(novoContador); onGuardar(novoContador); } }} />

        </div>
    </>

}