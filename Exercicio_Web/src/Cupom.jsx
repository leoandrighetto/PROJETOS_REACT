export default function Cupom({cupomDigitado,setCupom,validarCupom}){

    

    return<>
    <div style={{display:'flex',alignItems:'center',gap:'10px'}}>

        <input type="text" value={cupomDigitado} onChange={(e) => setCupom(e.target.value)} style={{maxHeight:'15px', maxWidth:'100px'}} />
        <button onClick={()=> validarCupom(cupomDigitado)}> {"<< "}APLICAR CUPOM</button>

    </div>

    </>

}