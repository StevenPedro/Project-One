/*
 FALSY

Quando o valor é considerado em contextos onde um booleano é obriatório ( condicionais e loops)

false
0
-0
""
null
undefined
NaN
*/

console.log( false ? 'verdadeiro' : 'falso')


/*
TRUTHY

Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops)

true
{}
[]
"0"
1
3.23
"false"
-1
infinity
-infinity

*/

console.log( 1 ? 'true' : 'false')