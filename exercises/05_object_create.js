// -> Let's create an object called 'machine'
const machine = {};

// -> Use Object.create to create another object called 'robot' with 'machine'
//    set as the prototype
const robot = Object.create(machine);

// -> Use Object.create to create another object called 'robby' with 'robot'
//    as the prototype
const robby = Object.create(robot);

// -> What is the result of `machine.isPrototypeOf(robby)`?
console.log(machine.isPrototypeOf(robby));
// -> What is the result of `robot.isPrototypeOf(robby)`?
console.log(robot.isPrototypeOf(robby));

// -> Which object is the direct prototype of robby?
