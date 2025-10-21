import Carta from "./carta";
import { useState } from "react";

export default function JogoCartasPai() {

    function shuffle(array) {
  let index = array.length;

  while (index != 0) {
    let randomIndex = Math.floor(Math.random() * index);
    index--;
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }

  return array; 
    } 

    const cartasA = shuffle([
    { id: 1, valor: "A", virada: false, encontrada: false },
    { id: 2, valor: "B", virada: false, encontrada: false },
    { id: 3, valor: "C", virada: false, encontrada: false },
    { id: 4, valor: "D", virada: false, encontrada: false },
    { id: 5, valor: "E", virada: false, encontrada: false }]);

    const cartasB = shuffle([
    { id: 1, valor: "A", virada: false, encontrada: false },
    { id: 2, valor: "B", virada: false, encontrada: false },
    { id: 3, valor: "C", virada: false, encontrada: false },
    { id: 4, valor: "D", virada: false, encontrada: false },
    { id: 5, valor: "E", virada: false, encontrada: false }]);

    const [cartas_a, setCartas_a] = useState(cartasA); //cartas

    const [cartas_b, setCartas_b] = useState(cartasB);

    const [cartasViradas,setCartasViradas] = useState([]);

    const [paresCompletos,setParesCompletos] = useState(0);

    const [tentativas,setTentativas] = useState(5);

    const [bloquearCartas, setBloquearCartas] = useState(false);

    const [erro,setErro] = useState(false);

    function virarCarta(obj,grupo){

        setErro(false)
        let novaCartasViradas = [...cartasViradas];

        if(grupo==="a"){ //CARTAS A ou B

            setCartas_a(cartas_a.map((carta)=> {return obj.id===carta.id?{...carta,virada:true}:carta;}));

            let cartaA = cartas_a.find((carta)=> {return obj.id===carta.id})

            setCartasViradas([...novaCartasViradas,cartaA]);}

        else{//CARTAS B

            setCartas_b(cartas_b.map((carta)=> {return obj.id===carta.id?{...carta,virada:true}:carta;}))

            let cartaB = cartas_b.find((carta)=> {return obj.id===carta.id})

            setCartasViradas([...novaCartasViradas,cartaB]);}

        }

    const EncontrarPar = () => {

        let novoParesCompletos = paresCompletos;
        
        let novoCartasViradas = [...cartasViradas];

        if(novoCartasViradas.length===2){

            if(novoCartasViradas[0].id===novoCartasViradas[1].id){

                setCartas_a(cartas_a.map((carta)=> {return novoCartasViradas[0].id===carta.id?{...carta,virada:false,encontrada:true}:carta;}));
                setCartas_b(cartas_b.map((carta)=> {return novoCartasViradas[1].id===carta.id?{...carta,virada:false,encontrada:true}:carta;}));

                setParesCompletos(novoParesCompletos+1)

                setCartasViradas([]);}

                else{
                    setBloquearCartas(true);
                    setCartasViradas([]);
                    setErro(true)
                    }
            }
    }
    
    console.log(cartasViradas)

    function mensagemVitória(){

        if (paresCompletos == 5){
            
            return<>
                <div>

                PARABÉNS, VOCÊ VENCEU!

                </div>
                </>
        
    }}

    function mensagemErro(){

        if (erro){

            if(tentativas>0){
                return<>

                <div>

                    <div style={{display: 'flex',justifyContent:'center', alignItems:'center', gap: '10px', marginBottom:'10px', fontSize:'13pt'}}>

                    Você errou. Ainda tem {tentativas} tentativas. Clique abaixo para tentar novamente:

                    </div>

                    <div style={{display: 'flex',justifyContent:'center', alignItems:'center', gap: '10px', marginBottom:'10px'}}>

                        <button style={{alignItems:'center', width: '150px', height: '40px', border: '0px', borderRadius:'10px'}}

                        onClick={()=> Reiniciar()}>{"TENTAR NOVAMENTE"}</button>

                    </div>

                </div>
                </>}

                if(tentativas == 0){

                    return<>
                    VOCÊ PERDEU!
                    </>

                    }
        }
    }

    function Reiniciar(){

        setErro(false);

        setCartas_a(cartas_a.map((carta)=> {return {...carta,virada:false,encontrada:false}}));
        setCartas_b(cartas_b.map((carta)=> {return {...carta,virada:false,encontrada:false}}));

        setBloquearCartas(false);
        setTentativas(tentativas-1);
        setParesCompletos(0);
        
    }
  
    return <>

    <div display={{marginBottom: '10px'}}>

        <div style={{display: 'flex',justifyContent:'center', alignItems:'center', gap: '10px', marginBottom:'10px'}}>

            Cartas A: {cartas_a.map((obj) => <Carta key={obj.id} 
            id={obj.id} 
            valor={obj.valor} 
            virada={obj.virada} 
            encontrada={obj.encontrada}
            onVirar={() => virarCarta(obj,"a")}
            bloquear={bloquearCartas}
            onPar={EncontrarPar()}
            />)}

        </div>

        <div style={{display: 'flex',justifyContent:'center',alignItems:'center', gap: '10px',marginBottom:'10px'}}>

            Cartas B: {cartas_b.map((obj) => <Carta key={obj.id} 
            id={obj.id} 
            valor={obj.valor} 
            virada={obj.virada} 
            encontrada={obj.encontrada}
            onVirar={() => virarCarta(obj,"b")}
            bloquear={bloquearCartas}
            onPar={EncontrarPar()}

             />)}
        
        </div>

        <div style={{display:'flex', marginTop:'40px'}}>

            {mensagemVitória()}{mensagemErro()}

        </div>
    </div>
    </>

    
}
