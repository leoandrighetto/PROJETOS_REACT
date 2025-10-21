import JogoDaForca from "./JogoDaForca";

export default function Teclado({alfabeto,tentarLetra}){

    return<>
    <div style={{display:'flex',flexWrap:'wrap',gap:'10px', justifyContent:'center', marginTop:'40px',maxWidth:'600px'}}>
    {alfabeto.map((letra,i) => <button 

    key={i+1} 

    disabled={letra.bloqueada}

    onClick={()=> {tentarLetra(letra.valor)}} 

    style={{backgroundColor:'#9c5fffff'}} >
    {letra.valor}
    </button>)}
    </div>
    </>
}