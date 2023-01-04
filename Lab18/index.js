// Lab18.1
let myCountry = {
  country: "Vietnam",
  capital: "Hanoi",
  language: "Vietnamese",
  population: 90,
  neighbours: 4,
};

//lab 18.2
console.log(
  `${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital}.`
);
myCountry.population += 2
myCountry['population'] -=2
console.log(myCountry);

// Lab18.3

 const myCountryOfMe = {
    country: "Vietnam",
    capital: "Hanoi",
    language: "Vietnamese",
    population: 90,
    neighbours: 4,
    fucDescribe: function() {
        console.log(
            `Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki"`
        );
    },
    checkIsland: function() {
        this.isIsland = this.neighbours ? true : false
        return this.isIsland
    }
  };
  myCountryOfMe.checkIsland()
console.log(myCountryOfMe.isIsland);

// Lab18.4
for(let i=1; i <=50; i++) {
    console.log(`Voter number ${i} is currently voting`)
}
//Lab18.5
function percentageOfWorld1(population) {
  return (population/7900)*100
}
let populations = [100, 1140, 500, 112]
let percentages2 = []
for(let j = 0; j<= populations.length - 1; j++) {
  percentages2.push(percentageOfWorld1(populations[j]))
}
console.log(percentages2);

//Lab18.6
let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]

for(let i = 0; i <= listOfNeighbours.length -1; i++) {
  for(let j = 0; j <= listOfNeighbours[i].length -1; j++) {
    if(j >= 1) {
      console.log(listOfNeighbours[i][j])
    }
  }
}

// Lab18.7
let percentages3 = []
let rep = 0;
while (rep <= populations.length - 1) {
  percentages3.push(percentageOfWorld1(populations[rep]))
  rep++
}
console.log(percentages3);

// Lab 18.8

// Lab18.8.1
const bmiOfMark = {
  full_name: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.Ibm = this.mass/(this.height*this.height)
    return this.Ibm
  }
}
const bmiOfJohn = {
  full_name: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.Ibm = this.mass/(this.height*this.height)
    return this.Ibm
  }
}
bmiOfMark.calcBMI()
console.log('bmiOfMark', bmiOfMark.Ibm);

bmiOfJohn.calcBMI()
console.log('bmiOfJohn', bmiOfJohn.Ibm);