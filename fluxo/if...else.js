// if...else

let temperature = 36.5
let highTemperature = temperature >= 37
let mediumTemperature = temperature < 37.5 && temperature >= 37
// sempre coloque nomes de var que faça sentido com o problema
// sempre coloque valores no grouping de multipla escolhas, não use muito valores vazios.
if(highTemperature){
    console.log('febre alta')
} else if (mediumTemperature) {
    console.log('febre moderada')
} else {
    console.log('saudável')
}
