console.log("main js loaded");

/*
Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

Doctor's name
Specialty (Oncologist, pediatrician, etc...)
Address of practice
*/

const createDoctor = (name, specialty, address) => {
  return {
      name,
      specialty,
      address
  };
};

/*
Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

Pet name
Pet breed

Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels
*/

const createPet = (name, breed) => {
  return {
    name: name,
    breed: breed
  };
};

let BowWowKennels = [
  createPet("Stella", "Boxer"),
  createPet("Dobro", "Pit"),
  createPet("Eli", "Aussie")
];

console.log(BowWowKennels);


/*

    Bruce Atikins is a Country artist and is 23 years old
    Jensen Brown is a Pop artist and is 20 years old
    Dre Funkz is a Funk artist and is 25 years old
    Dusta Grimes is a Rap artist and is 21 years old
    Bartholomew Danielson is a Bluegrass artist and is 23 years old
    Avilee Dallas is a Country artist and is 19 years old
    Austin Kinkaid is a Pop artist and is 22 years old
    Loyoncé Branis is a Rap artist and is 27 years old

*/

const jumpStopStyles = ["funk", "rap"];
const chattenStyles = ["country", "bluegrass"];
const polarStyles = ["pop"];

const createBluegrassArtist = (name, genre) => {
  return {
    name,
    genre
  };
};

const createCountryArtist = (name, genre) => {
  return {
    name,
    genre
  };
};

let ChattenRecords = [
  createBluegrassArtist("Bartholomew Danielson", "bluegrass"),
  createCountryArtist("Bruce Akikins", "country"),
];

console.log("Chatten Records", ChattenRecords)