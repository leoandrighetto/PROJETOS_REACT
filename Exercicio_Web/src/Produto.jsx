export default function Produto({lista_de_produtos,onAdicionar,onMostrarNota,onSomar,subTotal}){

    return<>
        <div style={{display:'flex', gap:'80px'}}> 

            <div>

                {lista_de_produtos.map((produto,i) =>

                <div key={i+1} style={{display:'flex', flexDirection:'column', padding:'10px', gap:'10px',marginBottom:"20px"}}> 
                    <span> NOME DO PRODUTO:    {produto.nome}</span>
                    <br />                                   
                    PREÇO: {produto.preco} 
                    <br />
                    <br />
                    <button 
                    style={{maxWidth:'155px'}}
                    onClick={()=> {{onAdicionar(produto),onSomar(produto)}}}>
                        ADICIONAR AO CARRINHO
                    </button>
                </div>
                

                
                )}
            </div>
            
            <div style={{display:'flex',flexDirection:'column',gap:'30px', alignItems:'flex-start',marginRight:'auto'}}>
                
                LISTA DE COMPRAS
                    
                {onMostrarNota()}
                

            </div>
        </div>

        <div style={{display:'flex', marginBottom:'25px'}}>
           SUBTOTAL DE ITENS: R$ {subTotal.toLocaleString('pt-BR')}
        </div>

    </> 

}