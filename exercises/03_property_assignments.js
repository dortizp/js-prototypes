// -> Define three objects:
const machine = {};
const vehicle = {};
const robot = {};

// 'machine', 'robot' and 'vehicle'

//    In the definition of machine add a property 'motors' set to null.
machine.motors = null;

// -> Let's make machine the prototype of robot and vehicle
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> What are `machine.motors`, `robot.motors` and `vehicle.motors`?
console.log(machine.motors, robot.motors, vehicle.motors);

// -> Set `robot.motors` to 4 by direct assignment
robot.motors = 4;

// -> What are `machine.motors`, `robot.motors` and `vehicle.motors` now?
console.log(machine.motors, robot.motors, vehicle.motors);
