// -> Let's define three objects: 'machine' 'vehicle' and 'robot'
const machine = {};
const vehicle = {};
const robot = {};

// -> Make machine the prototype of vehicle
vehicle.__proto__ = machine;

// -> Make machine the prototype of robot
robot.__proto__ = machine;

// -> Define a 'motors' property on machine, set this to 4
machine.motors = 4;

// -> What is `vehicle.motors`?
console.log(vehicle.motors); // 4

// -> What is `robot.motors`?
console.log(robot.motors); // 4
