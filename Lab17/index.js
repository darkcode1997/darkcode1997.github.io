//Lab  17.1
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}
let vietnam = describeCountry('vietnam', 1000, 'Hanoi')
let thailan = describeCountry('thailan', 1000, 'Bangkok')
let trungquoc = describeCountry('trungquoc', 1000, 'Bejing')

console.log('vietnam', vietnam)
console.log('thailan', thailan)
console.log('trungquoc', trungquoc)


//Lab17.2

function percentageOfWorld1(population) {
    return (population/7900)*100
}
let vietnam2 = percentageOfWorld1(100);
let trungquoc2 = percentageOfWorld1(1441)
let thailan2 = percentageOfWorld1(51)

console.log('vietnam', vietnam2);
console.log('trungquoc', trungquoc2);
console.log('thailan', thailan2);
//hàm biểu thức

let percentageOfWorld2 = function(population) {
    return(population/7900)*100
}
percentageOfWorld2(100);
percentageOfWorld2(1411);
percentageOfWorld2(51);

//Lab17.3

let percentageOfWorld3 = (population) => (population/7900)*100

//Lab 17.4
let describePopulation = (country, population) => `${country} has 1441 million people, which is about ${percentageOfWorld1(population)} of the world`

describePopulation('vietnam', 100)
describePopulation('trungquoc', 1441)
describePopulation('thailan', 501)

//Lab17.5

let populations = [100, 1140, 500, 112]

console.log(populations);//true

let percentages = [percentageOfWorld1(100),percentageOfWorld1(1140),percentageOfWorld1(500),percentageOfWorld1(112)]
console.log(percentages);

//Lab17.6

let neighbours = ['Vietnam', 'ThaiLan', 'Compuchia']

neighbours.push('Utopia')

neighbours.pop('Utopia')

if(neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}
//thay đổi tên đất nước việt nam thành Mỹ
if(neighbours.includes('Vietnam')) {
    let index = neighbours.indexOf('Vietnam')
    neighbours[index] = 'Mỹ'
}
console.log(neighbours);
// Lab17.7.1
const alcAverage = (a, b, c) => (a+b+c)/3
function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }else if(avgDolphins < avgKoalas) {
        console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
    }
    else {
        console.log('Không có đội thắng');
    }
}
checkWinner(alcAverage(44,23,71), alcAverage(65,54,49))
checkWinner(alcAverage(85,54,41), alcAverage(23,34,27))

//Lab17.72
let calcTip= (billMoney) => {
    let tip = 0
    if(300>=billMoney && billMoney >=50) {
        tip = billMoney*(15/100)
    }else {
        tip = billMoney*(20/100)
    }
    return tip
}
console.log('tip',calcTip(100));

let bills = [125, 555, 44]
let tips = [calcTip(125), calcTip(555), calcTip(44)]
let total = [calcTip(125) + 125, calcTip(555) + 555, calcTip(44) + 44]