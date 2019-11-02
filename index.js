/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
// Person object constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
// eat
Person.prototype.eat = function(food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food)
  }
}
// poop
Person.prototype.poop = function() {
  this.stomach = [];
}
// state name and age
Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
}

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons;
}

Car.prototype.drive = function(distance) {
  // Function assumes that the tank can only contain integers amounts
  // Distance is assumed to be in miles
  let drivableDistance = this.tank * this.milesPerGallon;
  let fuelNeeded = distance / this.milesPerGallon;
  this.odometer += Math.min(distance, drivableDistance);
  this.tank = Math.max(this.tank - fuelNeeded, 0)
  if (this.tank === 0) {
    return `I ran out of fuel at ${this.odometer} miles!`
  }
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Implicit context: Using `this` in the function of an Object literal refers to the Object defined by the literal
    Example:
      let superhero = {
        'name': "Hulk",
        'age': 31,
        'super_power': 'smash',
        'jam': 'smash face',
        'shout': function() {console.log(`I am ${this.name}`.toUpperCase() + "!!!")}
      }

  2. New binding: Using the `new` keyword and a constructor function, 'this' refers to the Object returned by the constructor
    Example:
      function HappyPerson(name, jam) {
        this.name = name;
        this.jam = jam;
        this.shout = function () {return `I love ${this.jam}! Its my jam!`}
      }
      const jerry = new HappyPerson("Jerry", "Chinese");
      
  3. Explicit context: Using Object.prototype.apply or Object.prototype.call, you an bind instantiated objects to other objects
    Example (assuming code above is defined): 
      ...
      superhero.shout.call(jerry)
      jerry.shout.call(superhero)

      superhero.shout()
      => 'I love smash face! Its my jam!'

      jerry.shout()
      I AM JERRY!!!

  4. Global context: When referencing `this` outside of the above contexts, `this` would point to the window/console Object
    Example: 
      let superhero = {
        'name': this,
        'age': 31,
        'super_power': 'smash',
        'jam': 'smash face',
        'shout': function() {console.log(`I am ${this.name}`.toUpperCase() + "!!!")}
      }

      console.log(superhero.name)
      { global:
        { global: [Circular],
          process:
            process {
              title: 'node',
              ...
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
