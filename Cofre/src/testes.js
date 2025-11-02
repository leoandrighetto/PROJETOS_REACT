const lista = [1,2,3,4,5]
const lista2 = [1,2,3,4,5]

const comparar = lista.filter((e,i) => e === lista2[i]);

if (comparar.length===lista.length){
    console.log('deu')

}else{
    console.log('nao deu')
}