import { useState } from 'react';
import Carta from './Carta';

export default function JogoVinteUm({ tentativas, verso, listaCartas }) {

    const [Tentativas, setTentativas] = useState(tentativas);
    const [pontos, setPontos] = useState(0);

    const [mensagem, setMensagem] = useState("");

    function pontuar(carta) {

        if (Tentativas <= 0) return;

        let T = Tentativas - 1;
        let P = pontos + carta.valor;

        setPontos(P);
        setTentativas(T);

        if (P > 21) {
            setMensagem("Você perdeu!")
        }
        else if (P < 21 && T === 0) {
            setMensagem("Você ficou com " + P + ' Pontos')
        }
        else if (P === 21 && T === 0) {
            setMensagem('Você Ganhou!')
        }

    }
    console.log(pontos)
    console.log(mensagem)

    return <>

        <div style={{lineHeight:'1.8',fontSize:'19pt',fontFamily:'monospace'}}>

            Jogo do 21, para ganhar você deve fazer 21 pontos!
            <br />
            Pontos: {pontos}
            <br />
            Tentativas:{tentativas}/4
            <br />

        {listaCartas.map((carta, i) => <Carta
            pontos={pontos}
            pontuar={pontuar}
            cartaEscolhida={carta} verso={verso} key={i} />)}

        <br />
        {mensagem}
        </div>

    </>

}