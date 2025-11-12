// 1vo domasno
// 5 primeri 

// example 1
// The weather in autumn can be dynamic. Weather: windy, rainy or sunny

let temperature = 23
let season = "autumn"
let weather1 = "windy"
let weather2 = "rainy"
let weather3 = "sunny"

console.log("The weather in " + season + " can be " + weather1 + ", " + weather2 + " or " + weather3 + ". Chose the appropriate clothes!");

console.log("----------------");


if (temperature >= 23) {
    console.log("The weather today is " + weather3 + " with a " + temperature + " degrees temperature!" + "\nWear a T-shirt!");
} 
else if(temperature <= 19){
    console.log("The weather today is " + weather2 + "! Wear a jacket!");
}
 else if(temperature < 9) {
    console.log("The weather today is " + weather1 + "Wear a winter jacket!");
 }

 console.log("----------------");
 let temperature2 = 18
// let weather1 = "windy"
// let weather2 = "rainy"
// let weather3 = "sunny"

if (temperature2 >= 20) {
    console.log("The weather today is " + weather3 + " with a " + temperature2 + " degrees temperature!" + "\nWear a T-shirt!");
} 
else if(temperature2 <= 19){
    console.log("The weather today is " + weather2 + " with a " + temperature2 + " degrees temperature!" + "\nWear a jacket!");
}
 else if(temperature2 < 9) {
    console.log("The weather today is " + weather1 + "! Wear a winter jacket!");
 }

 console.log("----------------");
 let temperature3 = 17
// let weather1 = "windy"
// let weather2 = "rainy"
// let weather3 = "sunny"

if (temperature2 >= 25 || temperature3 >= 24) {
    console.log("The weather today is " + weather3 + "\nWear a T-shirt!");
} 
 if(temperature2 <= 20 || temperature3 <= 21){
    console.log("The weather today is " + weather2 + "\nWear a jacket!");
}
 if(temperature2 < 9) {
    console.log("The weather today is " + weather1 + "! Wear a T-shirt and take a jacket just in case!");
 }

  console.log("----------------");

  if (temperature2 >= 25 && temperature3 >= 24) {
    console.log("The weather today is " + weather3 + "\nWear a T-shirt!");
} 
  if(temperature2 > 24 && temperature3 > 27){
    console.log("The weather today is " + weather2 + "\nWear a jacket!");
}
  if(temperature2 >= 18 && temperature3 <= 17) {
    console.log("The weather today is " + weather2 + "! Wear a T-shirt and take a jacket just in case!");
 }
 
 console.log("----------------");
let weather4 = "unstable"
let stromy = true
let weatherwarning = true

if(stromy && weatherwarning) {
    console.log("The weather today is " + weather1 +", " + weather2 + " and " + weather4 + ". Do not go outside!");
    
} else {
    console.log("The weather today is" + weather1 + "and" + weather3 + ". Grab your jacket and go outside!")
}

console.log("----------------");

let weatherwarning2 = false

if(stromy && weatherwarning2) {
    console.log("The weather today is " + weather1 +", " + weather2 + " and " + weather4 + ". Do not go outside!");
    
} else {
    console.log("The weather today is " + weather1 + " and " + weather3 + ". Grab your jacket and go outside!")
}
console.log("----------------");
let sun = true
let safe = true
let lightrain = false

if(stromy && weatherwarning2) {
    console.log("The weather today is " + weather1 +", " + weather2 + " and " + weather4 + ". Do not go outside!"); 
} 
if(stromy || safe) {
    console.log("The weather today is " + weather1 + " and " + weather2 + ". Grab your umbrella and go outside!")
}
if(sun || safe) {
    console.log("The weather today is " + weather1 + " and " + weather3 + ". Grab your friends and go to the park!")
}

console.log("----------------");

if(stromy && weatherwarning) {
    console.log("The weather today is " + weather1 +", " + weather2 + " and " + weather4 + ". Do not go outside!"); 
} 
if(lightrain && safe) {
    console.log("The weather today is " + weather1 + " and " + weather2 + ". Grab your umbrella and go outside!")
}
if(stromy && weatherwarning) {
    console.log("Call your family and stay safe!")
}