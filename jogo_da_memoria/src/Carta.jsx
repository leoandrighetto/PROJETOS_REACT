export default function Carta({ id, valor, virada, encontrada, onVirar, bloquear, onPar }) {

    return <>
    <div >
        <button 
        style={{backgroundColor: encontrada? '#0fe656ff':'#413e3eff', 
            fontSize:'18px',color:'white', border: virada ? '2px solid #f30f0fff' : '0px', borderRadius:'10px'}} 


        disabled={encontrada||bloquear} onClick={()=> {onVirar()}} >{virada || encontrada ? valor : "*"}</button>
    </div>
    </>


}