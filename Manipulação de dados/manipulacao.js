/*

 Prototype

 * Prototype-based language
 * prototype chain
 * __proto__

 */

 /*
Type conversion (typecasting) vs type coersion

* Alteração de um tipo de dado para outro tipo.

 */

//console.log('52' + 10) // type coersion, vai força e juntar virando uma concatenação
//console.log(Number('52') + 10) // type conversion, ele mostrou pra máquina o que fazer, que era pra somar ao invés de uma concatenação. 

// ____________________________________________________

// Manipulando Strings e Números

// Transformar Strings em Número e números em string
//let string = "123"
//console.log(Number(String))
//let number = 321
//console.log(String(Number))


// Manipulando Strings e Números

// Contar quantos caracteres te muma palavra e quantos dígitos te mum número
//let word = "casacaiuda"
//console.log(word.length) // usando o length vc pode saber quantas letras tem na frase
//let number = 123255
//console.log(String(Number).length) // agora o length só conta letras e não números, ai transformamos.

// Transformando um número quebrado com 2 casas decimais e trocar ponto por vírgula.

//let number = 656.5655545
//console.log(number.toFixed(2).replace(".", ",")) // replace é pra fazer uma troca

// Transforma letras minúsculas em maiúsculas. Faça o contrário disso também.

//let word = " programar é muito bacana!"
//console.log(word.toUpperCase()) // deixa as letras em maiúsculas

//let word = " programar é muito bacana!"
//console.log(word.toLocaleLowerCase(0)) // para deixar tudo minúsculo


// Verificação de uma palavra dentro de um texto

//let phrase = "Eu quero viver!"
//console.log(phrase.includes("felicidade")) // false

//let phrase = "Eu quero ter felicidade na  vida!"
//console.log(phrase.includes("felicidade")) // true

// para identificar o mesmo caractere precisamos identificalo igual.

//let phrase = "Hoje teremos uma novidade na vida, onde as vezes devemos viver e tentar ser feliz sem a vida maltrata nossos desejos."
//let myArray = phrase.split(" ") // o split serve pra retira e separar
//let phraseWithUnderscore = myArray.join("_")  // join serve para separa, nesse caso coloquei o "_" para ficar nos espaços vazios.
//console.log(phraseWithUnderscore)

// Criar Array com construtor

//let myArray = new Array("a", "b","c")
//console.log(myArray)

//console.log([
//    "a",
//    {type: "array"},
//    function() {return "dale"},
//][1].type) // o [] serve pra acessar o elemento, tipo vc quer ver o elemento 2 da string.

// Transformar uma cadeia de caracteres em elementos de um array

//let word = "manipular"
//console.log(Array.from(word))


// Manipulando Arrays
let techs = ["html", "css", "js"]

// adicionar um titulo no fim
//techs.push("node.js") // o push sabe qual é a última posição e agora ele colocará outra coisa ao fim.
// adicionar no começo
//techs.unshift("angular")
// remover do fim
//techs.pop()
// remover do começo
//techs.shift()
//pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))
// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 1)
// encontrar a posição de um elemento no array
// let index = techs.indexOf('css')
console.log(techs)