const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));





  // object definition
const car = {
    name: "BMW",
    description() {
      return `The ${this.name} is of ${this.color} color.`;
    },
  };
  
  // object definition
  const bike = {
    name: "Duke",
    color: "black",
  };
  
  // bike is borrowing description() method from car using apply() 
  let result = car.description.apply(bike);
  
  console.log(result);





  const numbers = [5, 1, 4, 3, 4, 6, 8];

// using apply() with Math object 
let max = Math.max.apply(null, numbers);

console.log(max); 

// without using apply() with Math object 
let max1 = Math.max(5, 1, 4, 3, 4, 6, 8);

console.log(max1); 