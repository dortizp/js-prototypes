// -> Create a machine object
//    with a property motors = 4
const Machine = function () {
    this.motors = 4;
}

let machine = new Machine();


// -> Create a robot object
//    with a property friendly = true
const Robot = function () {
    this.friendly = true;
}

let robot = new Robot();

// -> Create a robby object
let robby = Object.create(robot);

// -> Make machine the prototype of robot
robot.__proto__ = machine;
console.log(robot.motors);

// -> Make robot the prototype of robby
//robby = robot.prototype;
robby.__proto__ = robot;
console.log(robby.motors);

