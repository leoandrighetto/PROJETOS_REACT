export default function Produto({desconto, lista_de_produtos, onAdicionar, onMostrarNota, onSomar, subTotal }) {


    let aplicarDesconto = () => {

        if(desconto >= 0){
            return <>
                <div style={{display:'inline-block', whiteSpace:'pre'}}>TOTAL COM DESCONTO: R$ </div>

                <div style={{display:'inline-block', color:'red'}}>{Number(desconto).toLocaleString('pt-BR',{maximumFractionDigits:2})} </div> 
                </>
        }
    }

    return <>
        <div style={{ display: 'flex', gap: '80px' }}>

            

            <div>

                {lista_de_produtos.map((produto, i) =>

                    <div key={i + 1} style={{ display: 'flex', flexDirection: 'column', padding: '10px', gap: '10px', marginBottom: "20px" }}>
                        <span> NOME DO PRODUTO:    {produto.nome}</span>
                        <br />
                        PREÇO: {produto.preco.toLocaleString('pr-BR')}
                        <br />
                        <br />
                        <button
                            style={{ maxWidth: '155px' }}
                            onClick={() => { { onAdicionar(produto), onSomar(produto) } }}>
                            ADICIONAR AO CARRINHO
                        </button>
                    </div>



                )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'flex-start', marginRight: 'auto' }}>

                LISTA DE COMPRAS

                {onMostrarNota()}


            </div>
        </div>
        <span>SUBTOTAL DE ITENS: R$ {subTotal.toLocaleString('pt-BR')} </span>

        <div style={{ display: 'block', marginBottom: '15px'}}>
            <br />

            {aplicarDesconto()}
            
            
        </div>

    </>

}