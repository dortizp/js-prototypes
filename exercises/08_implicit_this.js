const Robot = function () {};
const Vehicle = function () {};

Vehicle.new = function () {
  let vehicle = {
    "name" : "casa"
  };
  vehicle.__proto__ = Vehicle;
  return vehicle
}

let carro = Vehicle.new()
//carro = new Vehicle();

console.log(carro)

console.log(Vehicle.isPrototypeOf(carro));