// Váriaveis, são um espço na memória para guardar algum valor
let pesoPeca = 150

// pesoPeca: Camel Case
// peso_peca: Snake Case
// PesoPeca - Pascal Case

if(pesoPeca>100) {
    console.log("Peso maior que 100g, logo, lodemos cadastrar a peça!!")
    } else {
        console.log("Peso insuficiente, não é possível cadastrar")
    }
 
let numeroPecas = 10
// numero

if(numeroPecas<10) {
    console.log("Ainda há espaço na caixa, podemos cadastrar a peça")
} else {
    console.log("Não há espaço dispoível na caixa")
}

//  ASCII Table

let nomePeca = "Disco"

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length < 3){
    console.log("Nome de peça muito curto, não é possível cadastrar")
} else {
    console.log("Nome de peça adequado, podemos cadastrar")
}