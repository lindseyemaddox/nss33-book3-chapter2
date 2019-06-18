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