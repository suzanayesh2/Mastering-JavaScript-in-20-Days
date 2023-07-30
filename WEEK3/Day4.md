# Day4 : Advanced Scope cont. & Closure
## Advanced Scope cont.
### Lesson Summary:
- All Diff between `var` vs `let` vs `const` : 


![image](https://github.com/suzanayesh2/Mastering-JavaScript-in-20-Days/assets/138245896/edadad99-a233-4f8a-8108-26e52f1442ca)

```javascript
var teacher="Suzy";
 teacher="Kyle";//ok

const teacher="Suzy";
 teacher="Kyle";// Type Error

const teachers=["Suzy",""];
 teacher[1]="Brian";//ok

```
- Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that you can use variables and functions before they are actually declared in the code.
```javascript
console.log(x); // Output: undefined
var x = 5;


```
```javascript

foo(); // Output: "Hello, I am foo."
function foo() {
  console.log("Hello, I am foo.");
}
```
```javascript
name;
let name ="Suzy";//ok
```
## Closure
- Allows functions to maintain access to variables from their outer (enclosing) scope even after the outer function has finished executing. 
- A Closure is a function bundled together with its lexical environment (the set of variables and their values) at the time of its creation.
- Closure is when a function “remembers” its lexical scope even when the function is executed outside that lexical scope.
- Modules encapsulate data and behavior (methods) together. The state (data) of a module is held by its methods via closure.
```javascript
function outerFunction() {
  let outerVariable = 10;

  function innerFunction() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: 10

```
## Coding Exersice
[Questions](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day4-tasks/tasks.md)
### Q1
#### My Solution
To fix this, we need to use the let keyword instead of var to declare the loop variable i. When using let, the loop variable will have block-level scope, and each iteration will create a new lexical environment for i, which will be captured correctly by the setTimeout callback.
```javascript
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log("value of [i] is: ", i);
    }, 100);
}
"value of [i] is: " 0
"value of [i] is: " 1
"value of [i] is: " 2
"value of [i] is: " 3
"value of [i] is: " 4

```
### Q2:
To fix this, we need to move the array variable outside of the loop, so it retains its value across iterations and accumulates the values of i on each iteration
```javascript
let array = []; // Move the array outside of the loop
for (let i = 0; i < 5; i++) {
   array.push(i); // Push the value of i to the array on each iteration
   console.log("Current array is: ", array);
}
"Current array is: [ 0 ]"
"Current array is: [ 0, 1 ]"
"Current array is: [ 0, 1, 2 ]"
"Current array is: [ 0, 1, 2, 3 ]"
"Current array is: [ 0, 1, 2, 3, 4 ]"

```

### Q3:
To fix this, we can use the let keyword instead of var to declare the loop variable i. When using let, the loop variable will have block-level scope, and each iteration will create a new lexical environment for i, which will be captured correctly by the arrow functions.
```javascript
let functions = [];

for (let i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());
"Current value of i is: 0"
"Current value of i is: 1"
"Current value of i is: 2"
"Current value of i is: 3"
"Current value of i is: 4"

```
### Q4:
```javascript
function privateCounter() {
  let count = 0; // Private variable within the closure

  return {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };
}

// Example usage:
const counter = privateCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); 

```
### Q5:
```javascript
function generateFibonacci(count) {
  let currentCount = 0;
  let fibonacciNumbers = [];

  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  return function() {
    if (currentCount < count) {
      const nextFibonacci = fibonacci(currentCount);
      fibonacciNumbers.push(nextFibonacci);
      currentCount++;
      return nextFibonacci;
    } else {
      return null;
    }
  };
}

// Example usage:
const getNextFibonacci = generateFibonacci(10);
for (let i = 0; i < 10; i++) {
  console.log(getNextFibonacci());
}

```
