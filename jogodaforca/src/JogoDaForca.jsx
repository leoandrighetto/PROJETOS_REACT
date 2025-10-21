import { useState } from "react";
import Forca from "./Forca";
import Teclado from "./Teclado";

export default function ({ palavra }) {

    const [letrasDaPalavra, setLetrasDaPalavra] = useState(palavra.split('').map((letra, i) => 
        { return { id: (i + 1), valor: letra, encontrada: false} }));

    const [acertos,setAcertos] = useState(0);
    
    const [tentativasErradas, setTentativasErradas] = useState(0);

    const [fimDoJogo,setfimDoJogo] = useState("");

    const [bloquearTeclado,setBloquearTeclado] = useState(false);

    const [alfabeto,setAlfabeto] = useState([{valor:"A",bloqueada:false},{valor:"B",bloqueada:false},{valor:"C",bloqueada:false},
        {valor:"D",bloqueada:false},{valor:"E",bloqueada:false},{valor:"F",bloqueada:false},{valor:"G",bloqueada:false},{valor:"H",bloqueada:false},
        {valor:"I",bloqueada:false},{valor:"J",bloqueada:false},{valor:"K",bloqueada:false},{valor:"L",bloqueada:false},{valor:"M",bloqueada:false},
        {valor:"N",bloqueada:false},{valor:"O",bloqueada:false},{valor:"P",bloqueada:false},{valor:"Q",bloqueada:false},{valor:"R",bloqueada:false},
        {valor:"S",bloqueada:false},{valor:"T",bloqueada:false},{valor:"U",bloqueada:false},{valor:"V",bloqueada:false},{valor:"W",bloqueada:false},
        {valor:"X",bloqueada:false},{valor:"Y",bloqueada:false},{valor:"Z",bloqueada:false}]);


    const bloquearLetra = (letra) => {
        
        let novoAlfabeto = ([...alfabeto])    

        setAlfabeto(novoAlfabeto.map((letraAlfabeto) => 

        letra === letraAlfabeto.valor?{...letra,bloqueada:true}:letraAlfabeto))}

    const interacao = () => {

        return 'Tentativas erradas: ' + tentativasErradas + '/3 '
    
    }

        
    const tentarLetra = (letra) => {

        let LetrasDaPalavra = [...letrasDaPalavra];

        let novoAcertos = acertos;

        let procurarLetra = LetrasDaPalavra.find(letras => letra==letras.valor);

        if(procurarLetra){

            setLetrasDaPalavra(LetrasDaPalavra.map(letras=> {return letra==letras.valor?{...letras,encontrada:true}:letras}))
            bloquearLetra(letra)
            setAcertos(novoAcertos+=1)}
            
        else{

            bloquearLetra(letra)

            let nova_tentativas = tentativasErradas;
            setTentativasErradas(nova_tentativas+=1)

            if(nova_tentativas==3){
                setBloquearTeclado(true);
                setAlfabeto([])
                setfimDoJogo("VOCÊ PERDEU!")
            }
        }
        if(novoAcertos == letrasDaPalavra.length){
            setBloquearTeclado(true);
            setAlfabeto([])
            setfimDoJogo("VOCÊ VENCEU!!")
        }
    }

    return <>
        <Forca palavra={letrasDaPalavra} />

        <Teclado tentarLetra={tentarLetra} 
        alfabeto={alfabeto}
        letraBloqueada={bloquearLetra}
        tecladoBloqueado={bloquearTeclado}
        />

        <div style={{display:'flex', justifySelf:'center', margin:'30px'}}>
        {fimDoJogo}
        </div>
        <div style={{display:'flex', justifySelf:'center', margin:'30px'}}>
        {interacao()}
        </div>
    </>

}