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

//Lab15.6
// IBM
function calculatorIBM(mass,height) {
   return mass/(height*height)
}
let markHigherBMI = false
let heightMark
let massMark 
let heightJohn
let massJohn 
//dữ liệu 1
markHigherBMI = calculatorIBM(78, 1.69) > calculatorIBM(92, 1.95)
//dữ liệu 2
markHigherBMI = calculatorIBM(95, 1.88) > calculatorIBM(85, 1.76)
console.log(markHigherBMI);
// Lab15.6.2
if(markHigherBMI) {
    console.log(`Mark's BMI(${calculatorIBM(95, 1.88)}) is higher than John's(${calculatorIBM(85, 1.76)})`);
}else {
    console.log(`John's BMI(${calculatorIBM(85, 1.76)}) is higher than Mark's(${calculatorIBM(95, 1.88)})`);
}