// kreiraj niza od 10 elementi (gradovi, drzavi)
// print metoda na objektot
// iteriranje na niza so objekti, (naj populiran grad, top 3 naj naseleni gradovi)
// prosek od broj na ziteli

let country1 = {
    name: "Japan",
    capital: "Tokyo",
    population: 125700000,
    continent: "Asia",
    officialLanguage: "Japanese",
    currency: "Yen",
    isLandlocked: false
}
let country2 = {
    name: "Brazil",
    capital: "Brasília",
    population: 214300000,
    continent: "South America",
    officialLanguage: "Portuguese",
    currency: "Real",
    isLandlocked: false
}

let country3 = {
    name: "Switzerland",
    capital: "Bern",
    population: 8700000,
    continent: "Europe",
    officialLanguage: "German",
    currency: "Swiss Franc",
    isLandlocked: true
}
let country4 = {
    name: "Egypt",
    capital: "Cairo",
    population: 109300000,
    continent: "Africa",
    officialLanguage: "Arabic",
    currency: "Egyptian Pound",
    isLandlocked: false
}
let country5 = {
    name: "Australia",
    capital: "Canberra",
    population: 25690000,
    continent: "Oceania",
    officialLanguage: "English",
    currency: "Australian Dollar",
    isLandlocked: false
}
let country6 = {
    name: "Canada",
    capital: "Ottawa",
    population: 38250000,
    continent: "North America",
    officialLanguage: "English",
    currency: "Canadian Dollar",
    isLandlocked: false
}
let country7 = {
    name: "Bolivia",
    capital: "Sucre",
    population: 12080000,
    continent: "South America",
    officialLanguage: "Spanish",
    currency: "Boliviano",
    isLandlocked: true
}
let country8 = {
    name: "India",
    capital: "New Delhi",
    population: 1408000000,
    continent: "Asia",
    officialLanguage: "Hindi",
    currency: "Indian Rupee",
    isLandlocked: false
}
let country9 = {
    name: "Kenya",
    capital: "Nairobi",
    population: 53000000,
    continent: "Africa",
    officialLanguage: "Swahili",
    currency: "Kenyan Shilling",
    isLandlocked: false
}
let country10 = {
    name: "Iceland",
    capital: "Reykjavík",
    population: 372000,
    continent: "Europe",
    officialLanguage: "Icelandic",
    currency: "Icelandic Króna",
    isLandlocked: false
}

const countries = [country1, country2, country3, country4, country5, country6, country7, country8, country9, country10]

// console.log(countries);

// pristapuvanje na element vo niza 

console.log("This is the 3rd country:", countries[2]);

console.log("Index6", countries[6]);
console.log("----------------------------");


// printanje na objektite
// ciklus for

for(let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
    
}

for(let i = 0; i < countries.length; i++) {
  console.log(`The country ${countries[i].name} is part of this continent ${countries[i].continent} with population of ${countries[i].population}.`);
 

}

console.log("----------------------------");
for(let i = 0; i < countries.length; i++) {
  console.log(`The capital city of ${countries[i].name} is ${countries[i].capital}, where the official language is ${countries[i].officialLanguage}!`);

}
// forEach ciklus

countries.forEach(country => console.log(country.name));

// iteriranje na niza so objekti, (naj populiran grad, top 3 naj naseleni gradovi)

for(let i = 0; i < countries.length; i++) {
    console.log(`Country: ${countries[i].name}, Population: ${countries[i].population}`);
    
}
console.log("-----highestPopCountry----");

let highestPopCountry = countries[0];

for(let i = 1; i < countries.length; i++) {
    if (countries[i].population > highestPopCountry.population) {
      highestPopCountry = countries[i];
        
    }
}

console.log(`The country with highest population from this list is: ${highestPopCountry.name} with ${highestPopCountry.population} population`);

console.log("--top-3-most-populated-countries--");

// sort - gi sortirame elementite po number
// slice - kreirame nova niza od top 3


const topThreeCountries = countries
.sort((a, b) => b.population - a.population)     
.slice(0, 3);

topThreeCountries.forEach((country, index) => {
    console.log(`Number ${index + 1}: ${country.name}`);
    
})

const bottomThreeCountries = countries
  // The swap to (a - b) makes the smallest numbers come first
  .sort((a, b) => a.population - b.population) 
  .slice(0, 3); // Still take the first 3 items

console.log("---Bottom-3-Least-Pop---");
bottomThreeCountries.forEach((country, index) => {
   
    console.log(`Number ${index + 1}: ${country.name}`);
});
console.log("---total population---");

let totalPopulation = 0; 

for (let country of countries) {
    
    let populationNumber = country.population; 
    
 totalPopulation = populationNumber + country.population; 
}

console.log(`The total population is: ${totalPopulation}`);
