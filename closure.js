let score = 4; // Global variable

function one() {
  let score = 0; // Local variable, shadows the global variable
  console.log(score); // Logs the local score (0)
}

function two() {
  // Corrected function declaration
  let score = 3; // Local variable
  console.log(score); // Logs the local score (3)
}

function three() {
  console.log(score); // Logs the global score (4)
}

// one(); // Calls function one
// two(); // Calls function two
// three();
// console.log(score); // Logs the global score (4)

function outerfun() {
  let outervar = "I am at Score level 1";
  function innerfun() {
    let innervar = "i am scope level 2";
    console.log(outervar);
  }
  console.log(innervar);
  innerfun();
}
// outerfun();

const myglobalvalue = 0; // 1
function func() {
  // 2
  const var1 = 1; // 3
  console.log(myglobalvalue); // 4

  function innerfunc() {
    // 5
    const var2 = 2; // 6
    console.log(var2, var1, myglobalvalue); // 7

    function innerofineerfunc() {
      // 8
      const var3 = 3; // 9
      console.log(var3, var2, var1, myglobalvalue); // 10 (corrected va3 to var3)
    }
    innerofineerfunc(); // 11 (corrected function call syntax)
  }
  innerfunc(); // 12
}
func(); // 13

/// closure

function superfunc() {
  let outervalue = " ia m outer ";
  function minorfunc() {
    console.log(outervalue);
  }
  minorfunc();
}
superfunc();

// another exampel of clouser
function createCounter() {
  let count = 0; // This variable is private to the createCounter function

  return function () {
    // This inner function forms a closure
    count += 1; // It can access and modify the count variable
    return count; // Returns the updated count
  };
}

const counter = createCounter(); // Create a new counter instance

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
console.log(counter()); // Output: 4
console.log("outcome willl be now ", counter()); // Output: 5

// another example of clouser

const errorMessage = "file not Found"; // Corrected variable name for clarity
setTimeout(function callback() {
  // Corrected to setTimeout
  console.log(errorMessage);
}, 10000);

let pagecount = 0; // 1
const item = [2, 3, 4, 5, 6, 9]; // 2 (corrected array declaration)
item.forEach(function iterator(num) {
  // 3 (corrected variable name)
  pagecount++; // 4
  console.log(num); // 5
});
console.log("page count ", pagecount); // 6

// Global Scoupe
const e = 10; // 1
function sum(a) {
  // 2
  return function b(bValue) {
    // 3 (added parameter bValue)
    return function c(cValue) {
      // 4 (added parameter cValue)
      return function d(dValue) {
        // 5 (added parameter dValue)
        return a + bValue + cValue + dValue + e; // 6 (use parameters)
      }; // 7
    }; // 8
  }; // 9
} // 10

console.log(sum(1)(2)(3)(4)); // 11
