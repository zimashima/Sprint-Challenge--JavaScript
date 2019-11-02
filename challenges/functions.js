// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

const consume = function (a,b,cb){
  return cb(a,b)
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (a,b) => a + b;
const multiply = (a,b) => a*b;
const greeting = (a,b) => `Hello ${a} ${b}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 
//      Because nestedFunction was inside the block scope of myFuction. 
//      Once a function is executed/ invoked, it will look for any variables inside of that function first. If the variable does not exist, it will look for it in the outer scope.
//      In this case, nestedFunction would look for internal inside its own, before it started looking in myFunction, and then in the Global Scope respectively.
//      The same way how myFunction can call the variable external that is outside of it, because variable in Global scope can be access by anything nested inside of it.

const external = "I'm outside the function";

function myFunction() {
   console.log(external);
   const internal = "Hello! I'm inside myFunction!";

   function nestedFunction() {
     console.log(internal);
     console.log(external)
   };
   nestedFunction();
 }
 myFunction();
