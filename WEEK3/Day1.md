# DAY1: Introduction,Types and Coercion
## Introduction:
### Lesson Summary: 
- About the subjects that will covery this week :
 * Types
• Primitive Types
• Abstract Operations
• Coercion
• Equality
• TypeScript, Flow, etc.

* Scope
• Nested Scope
• Hoisting
• Closure
• Modules

* Objects (Oriented)
• this
• class { }
• Prototypes
• OO vs. OLOO
## Types:
### Lesson Summary:
- Kyle Simpson describe why this statement that every thing in js is an object is false
because most value can be behave as an object so this not makes them to be object.
- Objects:
( object, function ,array ) 
- Not Objects
  (undefined, string, number, boolean, object, symbol, null, bigint (future) )


###### Kyle Simpson describe the main different between undefined, undeclared and uninitialized: 

- Undefined:
   means there is definitely a variable and at the moment it has no value and refers to a variable that has been declared but not assigned any value.
```javascript
let x; // x is declared but not initialized, so its value is undefined
console.log(x); // Output: undefined
```
- Undeclared 
means its never been created in any scope that we have access to .
```javascript
console.log(y); // Throws a ReferenceError: y is not defined (undeclared)
```

- Uninitialized
  refers to a variable that has been declared but not assigned any value.
```javascript
let z; // z is declared but not initialized, so its value is undefined
console.log(z); // Output: undefined

z = 10; // Now z is initialized with a value (10)
console.log(z); // Output: 10
```
# Learning sprint (1), week (3), day (1) delieverables

## Question 1:
[Q1](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day1-tasks/tasks.md?plain=1)
### My Solution :
```javascript
function convertStringToNumber(input) {
  if (typeof input === "string") {
    const number = +input; 
    if (!isNaN(number)) {
      return number;
    }
  }
  return {
    value: input,
    type: typeof input,
  };
}
```
## Question 2:
[Q2](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day1-tasks/tasks.md?plain=1)
### My Solution :
```javascriipt
const checkNaN = (value) => {
  return isNaN(value);
};
```
## Question 3:
Write a function called complexCoercion that takes a single argument and checks if its type is primitive, and if so returns a coerced value according to the rules below.
### My Solution :
```javascript
function isEmptyValue(value) {
  return !Boolean(value);
}

```
## Question 4:
Write a function called `compareObjects` that takes 2 arguments of type `"object"` and compares them. If both arguments are equal, return `true`. If not, return `false`.
### My Solution :

```javascript
function compareObjects(input1, input2) {
    if (typeof input1 === "object" && typeof input === "object") {
        return false;
    } else if (typeof input1 !== "object" || typeof input2 !== "object") {
        return true;
    } else {
        return [input1, input2]
    }
}
console.log(compareObjects([3, 43], { "id": 342, "name": "Rami" }));
```
