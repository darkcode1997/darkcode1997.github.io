// Lab16.2
// let numNeighbours = prompt('How many neighbor countries does your country have?')
// console.log(numNeighbours);
// if (Number(numNeighbours) === 1) {
//   console.log("Only 1 border!");
// } else if (Number(numNeighbours) > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

//lab16.3
// let country = ''
// const population = 50
// const language = true
// const isIsland = false
// let countryAnswer = prompt('nhập nước muốn sống ?')
// let populationAnswer = prompt('dân số là bao nhiêu ?')
// let isIslandAnswer = confirm('có phải quốc đảo không ?')
// let languageAnswer = confirm('có sử dụng tiếng anh không ?')

// if(populationAnswer < population && languageAnswer === language && isIslandAnswer === isIsland) {
//     console.log(`You should live in ${countryAnswer}`)
// }else {
//     console.log(`${countryAnswer} does not meet your criteria :(`);
// }

// Lab 16.4
// const languages = prompt("Nhập ngôn ngữ");
// switch (languages) {
//   case "Chinese or Mandarin":
//     console.log("MOST number of native speakers");
//     break;
//   case "Spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "English":
//     console.log("3rd place");
//     break;
//   case "Hindi":
//     console.log("Number 4");
//     break;
//   case "Arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
//     break;
// }

// Lab 16.5
let population = 33
let result = population > 13 ? `Portugal's population is above average` : `Portugal's population is below average`

// Lab 16.6
// 16.6.1
const minCoin = 100
function averageCoin(a, b, c) {
    return (a + b + c) /3
}
// kiem tra Dữ liệu Bonus 2

// let averageDolphinsCoin = averageCoin(97, 112, 101)
// let averageKoalasCoin = averageCoin(109, 95, 106)


// kiem tra Bonus 1
let averageDolphinsCoin = averageCoin(97, 112, 101)
let averageKoalasCoin = averageCoin(109, 95, 123)
if(averageKoalasCoin >= 100 || averageDolphinsCoin >= 100) {
    if( averageDolphinsCoin> averageKoalasCoin && averageDolphinsCoin >= 100) {
        console.log('Dolphins là đội chiến thắng')
    }else if(averageKoalasCoin > averageDolphinsCoin && averageKoalasCoin >= 100) {
        console.log('Koalas là đội chiến thắng')
    }else if(averageKoalasCoin === averageDolphinsCoin) {
        console.log('Hai đội hòa nhau')
    }else {
        console.log('Không có đội nào chiến thắng')
    }
}else {
    console.log('Không có đội nào chiến thắng')
}

// Lab16.6.2
let tipPercent = 15/100
let tipMoney = 0
// let order = 430
// let order = 40
let order = 275
if(300>=order && order >=50) {
}else {
    tipPercent = 20/100
}
tipMoney = order * tipPercent
console.log('tipMoney','$' +tipMoney );