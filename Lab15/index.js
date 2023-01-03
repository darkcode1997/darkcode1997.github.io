//Lab15.1
let population = 99;
let isIsland = false;
// let country = 'Vietnam';
// let language;
console.log('population', population);
console.log('isIsland', isIsland);
// console.log('country', country);
// console.log('language', language);

//lab15.2
// language = 'Vietnamese'
const country = 'Vietnam'
const language = 'Vietnamese';

// Lab15.3
let amountPopulation = 0;
amountPopulation = population/2
console.log('population/2', amountPopulation)
population += 1

console.log(population > 6)

let averagePopulationCountry = 33
console.log(averagePopulationCountry > population)
// let description = country + ' and its ' + population + 'million people speak' +  language;
// Lab15.4
let description = `${country} and its ${population} million people speak ${language}`

//Lab 15.5
if(averagePopulationCountry < population) {
    console.log(`${country}'s population is above average`)
}else {
    console.log(`${country}'s population is ${33 - population} million below average' `)
}
