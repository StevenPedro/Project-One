//REVISAO



// object

const person = {
    name: 'steven',
    age: 52,
    weight:100.1,
    IsAdmin: true
}
console.log(`${person.name} tem ${person.age} anos`)

/*console.log(person.name)
console.log(person.age)
console.log(person.weight) para pegar algum especifico dentro do objeto usamos o " . ".
*/


//array
const animals = [
    'lion',
    'Monkey',
    {
        name:'cat',
        age: 3
    }
]
// acessar valores dento do Array
console.log(animals[2].name)