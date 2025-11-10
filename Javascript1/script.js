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
    onsole.log("The weather today is " + weather1 + "Wear a winter jacket!");
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
    onsole.log("The weather today is " + weather1 + "! Wear a winter jacket!");
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
    onsole.log("The weather today is " + weather1 + "! Wear a T-shirt and take a jacket just in case!");
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
 