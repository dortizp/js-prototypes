// -> Define a 'Robot' function constructor
let Robot = function () {
    this.parts = [];
    this.capabilities = [];
};
// -> Create two instances of Robot: 'robby' and 'cranky'
let robby = new Robot();
let cranky = new Robot();

// -> Both robby and cranky should respond to 'parts' and 'capabilities', these
//    should be empty arrays at first


// -> What is the result of robby.parts?
console.log(robby.parts);
// -> What is result of cranky.parts?
console.log(cranky.parts);
// -> What is result of robby.capabilities?
console.log(robby.capabilities);
// -> What is result of cranky.capabilities?
console.log(cranky.capabilities);

// -> Add 'core' to robby.parts, cranky.parts should still be empty
robby.parts.push('core');
console.log(robby.parts);
console.log(cranky.parts);

// -> Add 'fly' to robby.capabilities, after doing that cranky.capabilities must
//    also have 'fly' without adding to it directly, so this property has to be
//    shared

Robot.prototype.capabilities.push('fly');
console.log(robby.capabilities);
// -> What is result of cranky.capabilities?
console.log(cranky.capabilities);
