// Homework
// BONUS Homework
// (Kako primerot so Anhoch) ekstrahiranje na json niza od objekti, izvrsuvanje na filter, map i forEach vrz niv
// fetch public api
// reading: reduce

let object1 = {
    name: "Mercury",
    orbitPeriodDays: 88,
    moons: 0,
    mainComposition: "Rock/Iron",
   
  }
  let object2 = {
    name: "Venus",
    orbitPeriodDays: 225,
    moons: 0,
    mainComposition: "Rock/Sulfur",
   
  }
  let object3 =  {
    name: "Earth",
    orbitPeriodDays: 365,
    moons: 1,
    mainComposition: "Rock/Water",
    
  }
  let object4 =  {
    name: "Mars",
    orbitPeriodDays: 687,
    moons: 2,
    mainComposition: "Rock/Iron Oxide",
  }
  let object5 =  {
    name: "Jupiter",
    orbitPeriodDays: 4333,
    moons: 95, 
    mainComposition: "Hydrogen/Helium",
   
  }
  let object6 =  {
    name: "Saturn",
    orbitPeriodDays: 10759,
    moons: 146, 
    mainComposition: "Hydrogen/Helium",

  }
  let object7 =  {
    name: "Uranus",
    orbitPeriodDays: 30687,
    moons: 27,
    mainComposition: "Ice/Rock",
   
  }
  let object8 = {
    name: "Neptune",
    orbitPeriodDays: 60190,
    moons: 16,
    mainComposition: "Ice/Rock",
   
  }
  let object9 =  {
    name: "Pluto",
    orbitPeriodDays: 90560,
    moons: 5,
    mainComposition: "Ice/Rock",
   
  }
  let object10 =  {
    name: "Haumea", 
    orbitPeriodDays: 104746,
    moons: 2,
    mainComposition: "Ice/Rock",
  
  }

const planets = ["Mercury", "Venus", "Earth", "Mars", "Pluto", "Jupiter", "Saturn"]

const planets2 = ["Uranus", "Neptune", "Haumea"]

console.log("------SPREAD...------");

// spread operator
planets.push(...planets2);
console.log(planets);


console.log("-------forEach-------");

// Print na site elementi od niza so forEach

planets.forEach (function (planet, index) {
    console.log(`${index}: ${planet}`);
    
})
console.log("--- arrow func => ---");

// same with above
planets.forEach ((planet, index) => {
    console.log(`${index}: ${planet}`);
    
})


// console.log("-------Splice---------");

// const deleted = planets.splice(1,1, planets2);
//  console.log(planets);


console.log("---MAP---");

// Mapiranje na niza od iminja vo iminja so uppercase

const upperCaseNames = planets.map(planet => planet.toUpperCase());

console.log(upperCaseNames);

console.log("---------------");

const characterNum = planets.map ((planet) => {
    return planet.length;
});

console.log(characterNum);

console.log("----SOLAR OBJECTS----");

const solarObjects = [object1, object2, object3, object4, object5, object6, object7]
const solarObjects2 = [object8, object9, object10]
 console.log(solarObjects);

 const upperCaseNames1 = solarObjects.map(object => object.name.toUpperCase());

console.log(upperCaseNames1);
 


console.log("-----Filter na elementi vo niza pogolemi od x----");



console.log("Kombinacija na filter i map so koristenje na kompleksni objekti");