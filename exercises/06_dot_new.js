// -> Define an object called 'Robot'
const Robot = {};
// -> Define a method called 'new' in Robot
Robot.new = function () {
    let robot = {};
    robot.__proto__ = Robot;
    return robot;
};

// -> When Robot.new is called it should return a new object with Robot as its prototype
//    e.g. var robby = Robot.new();
//    Robot should be the prototype of robby

var robby = Robot.new();
console.log(Robot.isPrototypeOf(robby));
