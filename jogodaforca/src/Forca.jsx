import JogoDaForca from "./JogoDaForca";
export default function Forca({palavra}) {

    return <>
        <div style={{display:'flex',gap:'10px', justifyContent:'center',marginTop:'40px'}}>
        {palavra.map((letra) => <button key={letra.id} style={{backgroundColor:'#5fb7ffff'}}>
            {letra.encontrada ? letra.valor : "-"}</button>)}
        </div>
    </>


}