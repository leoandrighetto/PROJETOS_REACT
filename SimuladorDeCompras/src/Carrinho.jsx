import Cupom from "./Cupom";
import { useState } from "react";
import Produto from "./Produto";


export default function Carrinho(){


    const [carrinho, setCarrinho] = useState([]);

    const [subTotal,setSubTotal] = useState(0);

    const [cupom,setCupom] = useState('');

    const cuponsValidos = ["DESC10","DESC20"];

    const [cupomInvalido,setCupomInvalido] = useState(false);

    const [desconto,setDesconto] = useState(0);


    const mostrarNota = () => {

        return <>
            <div>
                <div style={{gap:'10px'}}>

                {carrinho.map((item,id) =>  <div key={id+1} style={{display:'flex', gap:'30px'}}>

                                            <div style={{display:'flex',marginRight:'auto', marginBottom:'10px'}}>
                                            ITEM:{item.nome}    
                                            </div>
                                            <div style={{display:'flex',marginLeft:'auto'}}>
                                            |PREÇO: R$ {item.preco.toLocaleString('pt-BR')}                                                
                                            </div>

                                        </div>)}

                </div>
                
            </div>
        </>

    }

    const onAdicionar = (produto) => {

        setCarrinho([...carrinho,produto]);
    }

    const onSomar = (produto) => {

        setSubTotal(subTotal+produto.preco);

    }

    const validarCupom = (cupomPassado) => {

        if(cupomPassado===cuponsValidos[0]){

            setCupomInvalido(false);

            const dez = subTotal * 0.10;

            setDesconto(subTotal-dez);

        }else if(cupomPassado===cuponsValidos[1]){

            setCupomInvalido(false);

            const vinte = subTotal * 0.20;
  
            setDesconto(subTotal-vinte);
            
        }else{
            setCupomInvalido(true);
        }

    }

    return<>

        <Produto lista_de_produtos= {[{ nome: 'Camiseta', preco: 12.87 },{ nome: 'Notebook', preco: 1000 },{ nome: 'Violão', preco: 1370.00 }]}
        onAdicionar={onAdicionar} onMostrarNota={mostrarNota} onSomar={onSomar} subTotal ={subTotal} desconto={desconto} />

        <Cupom cupomDigitado = {cupom} setCupom={setCupom} validarCupom={validarCupom} />
       <div style={{display:'flex', marginTop:'10px', fontSize:'10pt'}}>{cupomInvalido ? "CUPOM INVÁLIDO":null}</div> 


        </>

}