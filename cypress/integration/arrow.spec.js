it ('Nada Agora', function () {})

// function soma (a, b) {
//     return a + b;
// }

// const soma = function (a, b) {
//     return a + b

// }

//Utilizando arrowfunction básico:
// const soma = (a,b) =>  {
//     return a + b 
// } 

// //Utilizando arrowfunction 2:
// const soma = (a,b) => a + b

// //Erro comum - Devemos colocar o retorno após o arrow para não ser necessário incluir o returno:
// const soma = (a,b) => {
//     a + b
// }

// Validando função com parâmetro
//const soma = (a) => a + a
//tendo parâmetro (no caso o "a", não precisa dos parênteses)
//const soma = a => a + a

//Não tendo parâmetro:
const soma = () => 5 + 5

// console.log (soma (1,4));


//Contexto no arrow function
it ('a function test...', function() {
    console.log('Function', this)
})

// com a arrow não conseguiremos pegar o contexto pois está vazio (), logo = undefined
it ('a function test...', () => {
    console.log('Arrow', this)
})