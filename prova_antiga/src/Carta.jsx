import { useState } from 'react';


export default function Carta({pontos, pontuar, verso, cartaEscolhida }) {

    const [virada, setVirada] = useState(false);
    function virarCarta(carta) {

        setVirada(true)
    }

    return <>
        <img onClick={() => {
            if (pontos<21) {
                if (!virada) {

                    virarCarta(cartaEscolhida);
                    pontuar(cartaEscolhida);
                }
            }
            else {
                undefined
            }
        }} src={!virada ? verso : cartaEscolhida.img} />
    </>
}