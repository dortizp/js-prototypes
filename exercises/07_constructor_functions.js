// -> Define a 'Robot' constructor function
const Robot = function () {
    this.motors = 2;
};

const robby = new Robot();

// -> Inside the Robot constructor assign a property 'motors' on 'this',
//    set motors to 2
// -> Create an instance of Robot called 'robby'

console.log(robby instanceof Robot);
// -> Type the code to know if robby an instance of Robot?
// -> What is the value of `robby.motors`?
console.log(robby.motors);
