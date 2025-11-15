// 2ra domasna - objekti i funkcii(return)

// 1. The Book Inventory


let book1 = {
    title: "Harry Potter and the Philosopher's Stone",
    author:"J. K. Rowling",
    publisher:"Bloomsbury Publishing PLC",
    publishedYear:2012,
    isFiction: true,
    pages:352,
    price: 599,
    format: "Paperback",
}

let book2 = {
    title: "Harry Potter and the Half-Blood Prince - Ravenclaw Edition",
    author:"J. K. Rowling",
    publisher:"Bloomsbury Publishing PLC",
    publishedYear: 2016,
    isFiction: true,
    pages:560,
    price: 2999,
    format: "Hardback",
}

let book3 = {
    title: "The Last Passenger",
    author:"Will Dean",
    publisher:"Hodder & Stoughton",
    publishedYear: 2025,
    isFiction: false,
    pages: 496,
    price: 1799,
    format: "Paperback",
}

let book4 = {
    title: "The Last Devil to Die",
    author:"Richard Osman",
    publisher:"Penguin Books",
    publishedYear: 2020,
    isFiction: false,
    pages: 421,
    price: 1199,
    format: "Paperback",
}

let book5 = {
    title: "The Hobbit Encyclopedia",
    author:"Damien Bador",
    publisher:"Frances Lincoln",
    publishedYear: 2024,
    isFiction: true,
    pages: 336,
    price: 2099,
    format: "Hardback",
}
// listed objects
console.log(book1, book2, book3, book4, book5);
console.log("----------------------------------------------------------------");
// book age and price

function checkBookAgeAndPrice (bookTitle, bookAGe, bookPrice) {
if(bookAGe <= 2025 && bookAGe > 2021 && bookPrice >= 1000 ){
    return (bookTitle + " is a New Premium Read!" ); }
 if(bookAGe <= 2020 && bookAGe >= 2017 && (bookPrice >= 1000 || bookPrice <= 1000)) {
    return (bookTitle + " is a Standard Inventory Item!" );
    
}  if(bookAGe <= 2016 && bookAGe >= 2013 && (bookPrice >= 1000 || bookPrice <= 1000)){
 return (bookTitle + " is an Old Read!" );
}
 if(bookAGe <= 2013 && bookPrice < 1000){
     return (bookTitle + " is an old treasure!" );
 }
 else{
    return null;
 }
}

checkBookAgeAndPrice (book3.title, book3.publishedYear, book3.price);
const results = checkBookAgeAndPrice (book3.title, book3.publishedYear, book3.price);
 console.log(results);
 console.log("-------------------");


checkBookAgeAndPrice (book1.title, book1.publishedYear, book1.price);
const results2 = checkBookAgeAndPrice (book1.title, book1.publishedYear, book1.price);
 console.log(results2);
 console.log("-------------------");

checkBookAgeAndPrice (book2.title, book2.publishedYear, book2.price);
const results3 = checkBookAgeAndPrice (book2.title, book2.publishedYear, book2.price);
 console.log(results3);
 console.log("-------------------");

checkBookAgeAndPrice (book4.title, book4.publishedYear, book4.price);
const results4 = checkBookAgeAndPrice (book4.title, book4.publishedYear, book4.price);
 console.log(results4);

console.log("-------------------");
checkBookAgeAndPrice (book5.title, book5.publishedYear, book5.price);
const results5 = checkBookAgeAndPrice (book5.title, book5.publishedYear, book5.price);
 console.log(results5);

console.log("--------------------------------------------------------------------");

// Limitet or standard edition check
 
function premiumBooks (bookFormat, bookTitle) {
    if(bookFormat === "Hardback") {
        return  bookTitle + " is a Limited Edition!" ;
    } if(bookFormat !== "Hardback") {
        return  bookTitle + " is a Standard Edition."
    }
}
premiumBooks (book1.format, book1.title);
const premium1 = premiumBooks (book1.format, book1.title);
console.log(premium1);
console.log("-------------------");

premiumBooks (book2.format, book2.title);
const premium2 = premiumBooks (book2.format, book2.title);
console.log(premium2);
console.log("-------------------");

premiumBooks (book3.format, book3.title);
const premium3 = premiumBooks (book3.format, book3.title);
console.log(premium3);
console.log("-------------------");

premiumBooks (book4.format, book4.title);
const premium4 = premiumBooks (book4.format, book4.title);
console.log(premium4);
console.log("-------------------");

premiumBooks (book5.format, book5.title);
const premium5 = premiumBooks (book5.format, book5.title);
console.log(premium5);
console.log("--------------------------------------------------------");



if(book1.format === "Hardback" && book1.isFiction === true) {
    console.log("BUY BOOK: " + book1.title);
}
if(book2.format === "Hardback" && book2.isFiction === true) {
    console.log("BUY BOOK: " + book2.title);
}
if(book3.format === "Hardback" && book3.isFiction === true) {
    console.log("BUY BOOK: " + book3.title);
}
if(book4.format === "Hardback" && book4.isFiction === true) {
    console.log("BUY BOOK: " + book4.title);
}
if(book5.format === "Hardback" && book5.isFiction === true) {
    console.log("BUY BOOK: " + book5.title);
}

// niza od objecti

let libraly =[book1.title, book2.title, book3.title, book4.title, book5.title];
console.log([libraly]);