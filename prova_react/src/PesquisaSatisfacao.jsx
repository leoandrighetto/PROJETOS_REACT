
import { useState } from "react"
import ItemAvaliado from "./itemAvaliado"

import bomAtivado from'./assets/bomAtivado.png'
import neutroAtivado from './assets/neutroAtivado.png'
import ruimAtivado from './assets/ruimAtivado.png'


export default function PesquisaSatisfacao(props){

    const [recadoFilho,setRecadoFilho] = useState(0);
    const [lista,setLista] = useState([0,0,0,0]);
    const [emAvaliacao,setEmAvaliacao] = useState(true);
    const [media,setMedia] = useState();
    const [mensagem,setMensagem] = useState('')

    let indiceAtual = 0;
    function avisarPai(flag){

        let RF = recadoFilho;

        if(flag===true){
            
            RF = RF + 1;

            setRecadoFilho(RF);

        }else if(flag===false){
            RF = RF - 1;

            setRecadoFilho(RF);

        }

    }

    function passarNumero(n,indice){
        let novoN = n
        let novaLista = [...lista]

        novaLista[indice] = novoN
        
        setLista(novaLista)
    }

    function finalizar(){
        let novoRF = recadoFilho;
        let l = lista

        if (novoRF===4){

            setEmAvaliacao(false)

            let soma = l[0] + l[1] + l[2] + l[3];

            let media = soma/4;

            setMedia(media)
            setMensagem("Media: " + media.toFixed(2))
                
            

        }
        else{
            window.alert("Preencha todos os Campos.")
        }

    }

    return <>

    {emAvaliacao ?    

     <>{props.itens.map((item, i) => < div key={i} > 
        {item}
        <br />
        <ItemAvaliado onAvisarPai = {avisarPai} onPassarNumero={passarNumero} Indice={i} />
        <br />
        
        </div>)}

        <button onClick={finalizar} >Finalizar</button> </> : 
        
        
        <>OBRIGADO POR JOGAR <br />{mensagem} {media>=4.00 ? (<> <br /><img src={bomAtivado}/></> ) :
        media>=2.00 && media<4.00 ? (<> <br /><img src={neutroAtivado}/></> ) : (<> <br /><img src={ruimAtivado}/></> )}
        <button onClick={()=>{
            setEmAvaliacao(true);
            setLista([0,0,0,0]);
            setRecadoFilho(0);
        }}>Jogar Novamente</button> 
        
        </>
        
        }
        
        
    </>

    
}