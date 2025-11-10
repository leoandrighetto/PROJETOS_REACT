import { useState } from 'react'

import bomDesativado from './assets/bomDesativado.png'
import neutroDesativado from './assets/neutroDesativado.png'
import ruimDesativado from './assets/ruimDesativado.png'

import bomAtivado from'./assets/bomAtivado.png'
import neutroAtivado from './assets/neutroAtivado.png'
import ruimAtivado from './assets/ruimAtivado.png'


export default function ItemAvaliado(props){

    const [bom,setBom] = useState(false);
    const [neutro,setNeutro] = useState(false);
    const [ruim,setRuim] = useState(false);
    const [controle,setControle] = useState(false);
    
    const [pontos,setPontos] = useState(0)
                
    function clicar(tipo,indice){

        indice = props.Indice
        console.log(indice)

        let novoB = bom;
        let novoN = neutro;
        let novoR = ruim;
        let novoP = pontos;

            if(tipo==='bom'){
                
                novoB = !bom;
                setBom(novoB);
                setNeutro(false);
                setRuim(false)
                setPontos(0)
                props.onPassarNumero(0,indice)


                if(novoB){
                    setPontos(5)
                    props.onPassarNumero(5,indice)
                }            

                if(!novoB && !novoN && !novoR){
                    setControle(false);
                    props.onAvisarPai(false);
                }else{
                    if(!controle){
                    setControle(true);
                    props.onAvisarPai(true);
                    }
                }
                             
            }

            else if(tipo==='neutro'){

                novoN = !neutro
                setNeutro(novoN);
                setBom(false)
                setRuim(false)
                setPontos(0)
                props.onPassarNumero(0,indice)

                if(novoN){
                    setPontos(3)
                    props.onPassarNumero(3,indice)}
                    
                if(!novoB && !novoN && !novoR){
                    setControle(false);
                    props.onAvisarPai(false);
                }else{
                    if(!controle){
                        
                    setControle(true);
                    props.onAvisarPai(true);
                    }
                }
            }
            
            else if(tipo==='ruim'){
                novoR = !ruim
                setRuim(novoR);
                setNeutro(false)
                setBom(false)
                setPontos(0)

                if(novoR){
                    setPontos(0)
                    props.onPassarNumero(0,indice)}
                
                if(!novoB && !novoN && !novoR){
                    setControle(false);
                    props.onAvisarPai(false);
                }else{
                    if(!controle){
                    setControle(true);
                    props.onAvisarPai(true);
                    }
                }
            }         
    }  
    return<>
    
        <img src={bom? bomAtivado: bomDesativado} onClick={()=>{clicar('bom')}}/>
        <img src={neutro? neutroAtivado: neutroDesativado} onClick={()=>{clicar('neutro')}}/>
        <img src={ruim? ruimAtivado: ruimDesativado} onClick={()=>{clicar('ruim')}}/>

    </>


}