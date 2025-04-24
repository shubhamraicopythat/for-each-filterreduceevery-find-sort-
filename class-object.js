// // what are the object and classUnderstanding Objects and Classes in JavaScript — Made Simple!

// If you're just starting with JavaScript, you’ve probably heard about objects and classes. Let's break them down with a real-life example that's easy to understand. 👇

// 🧱 What is an Object?
// An object in JavaScript is just a collection of related data (like numbers, strings) and functions (called methods).

// 📦 Think of an object like a box of information about something.

// Example:
// javascript
// Copy
// Edit
// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   start: function() {
//     console.log("Car is starting...");
//   }
// };

// car.start(); // Car is starting...
// Here, car is an object. It has properties like brand and model, and a method called start().

// 🧑‍🏫 What is a Class?
// A class is like a blueprint to create multiple objects with the same structure.

// 🏠 Imagine you’re building houses — each house has walls, doors, and windows. You can use one blueprint (class) to build many houses (objects).

// Example:
// javascript
// Copy
// Edit
// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }

//   start() {
//     console.log(`${this.brand} ${this.model} is starting...`);
//   }
// }

// const myCar = new Car("Honda", "Civic");
// myCar.start(); // Honda Civic is starting...
// We created a Car class and used it to make an object myCar. You can now make as many cars as you want with this blueprint!

// 💡 In Real Life
// 🧸 Object: A specific toy you own
// 🏭 Class: The factory design to make that kind of toy

// 🖼 Suggested Image:
// A simple illustration showing:

// A blueprint labeled “Car” 🏗

// Two finished cars (objects) made from the blueprint 🚗🚗

// Labels: "Class" above the blueprint and "Objects" above the cars

// Let me know if you want me to generate that image for you or help design a visual for your post!

// #JavaScript #CodingForBeginners #WebDevelopment #LearnToCode #JSClasses #ObjectsInJS #Frontend

class product {
  // // Propertes  ----> data mamber
  name;
  price;
  rating;

  // constrcter/
  constructor(n, p, r) {
    console.log("calling the constructer");
    this.name = n;
    this.price = p;
    this.rating = r;
  }

  // Behaviour
  // behaviour ---> function -- > member function
  display() {
    console.log(
      "Displayint the current product",
      this.name,
      this.price,
      this.rating
    );
  }
}
//  variable decration
const p = new product("iphone", 10000, 5); // new create an empy and plane object
// / in the above theses of code cunstructer method
console.log(p);
p.display;
