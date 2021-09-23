// -> Create three objects: 'machine', 'robot' and 'vehicle'
const machine = {};
const vehicle = {};
const robot = {};

// -> In the definition of machine set a property 'parts', set it to an 
//    empty array `[]`
machine.parts = [];

// -> In the definition of machine set a property 'capabilities', set it to 
//    an empty object `{}`
machine.capabilities = {};

// -> Let's set the prototype of both robot and vehicle to machine
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> What is `robot.parts`?
console.log(robot.parts);

// -> What is `vehicle.parts`?
console.log(vehicle.parts);

// -> What is `robot.capabilities`?
console.log(robot.capabilities);
// -> What is `vehicle.capabilities`?
console.log(vehicle.capabilities);

// -> Let's add a 'core' part to robot
robot.parts.push('core');

// -> What is `robot.parts` now?
console.log(robot.parts);

// -> What is `vehicle.parts` now?
console.log(vehicle.parts);

// -> Let's set an ability to vehicle
//vehicle.capabilities = { fly: true };
vehicle.capabilities["ability"] = "fly";
// -> What is `robot.capabilities` now?
console.log(robot.capabilities);

// -> What is `vehicle.capabilities` now?
console.log(vehicle.capabilities);