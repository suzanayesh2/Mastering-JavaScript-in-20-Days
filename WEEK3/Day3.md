# Day 3 : Scope, Function expressions and Advanced scope
## Function expressions: 
### Lesson Summary:
#### an `example` scope

- Reference error when you try to print what inside anotherTeacher function .

- you can not reassign anotherteacher 

```javascript
function teacher(){}

var myTeacher= function anotherTeacher(){
console.log(annotherTeacher);
}
console.log(teacher);
console.log(myTeacher);
console.log(anotherteacher);//reference error 
```
### Named Function Expression : 
```javascript
var clickHandler =function(){...};
var clickHandler =function keyHandler(){...};
```
- its a Function Expression because its not a function decoration
- function decoration mean if the word function is literally the first thing in the statement 
so if there is a variable or an operator or parentheses or any thing , then it is not a declartion
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

```
#### 1- Reliable function self-reference 
- Prefer a name function expression beacuse the name produces or creates a relible self-reference to the function from inside of itself .
   * It useful if you are going to make the function recursive.
   * It useful if that function is an event handler of some sort and it needs to reference itself to unbind itself
   * It useful if tou need to access any properties on that function object such as its link or its name or other thing of that sort 
#### 2- more debuggable stack traces
By naming your functions, you make your code more debuggable  ,you make your stack traces more debuggable , been able to tell the source of the bug simply by looking at the names and the order functions , what didnt get called and what did get called 

#### 3- More self-documenting code
when you read an anonymous function and try to understand it 

### Arrow Function 
Arrow functions were introduced in ECMAScript 6 (ES6) allow you to write functions in a short manner. But arrow functions cannot be declared

```javascript
var ids = people.map(person => person.id);

var ids = people.map(function getId(person){
return person.id;});
```
* another one from ChatGPT 

```javascript
const multiplyAndAdd = (a, b, c) => {
  const product = a * b;
  return product + c;
};

console.log(multiplyAndAdd(2, 3, 4)); // Output: 10

```
## Advanced Scope
 - Lexical scope, also known as static scope, is a scope resolution mechanism where the scope of a variable is determined based on its location in the source code (i.e., the placement of the variable declaration).
```javascript
var teacher ="kyle";
function otherClass(){
var teacher ="Suzy";
function ask(question){
console.log(teacher,question);

}ask("why");
}
```
```javascript
function outer() {
  const x = 10;

  function inner() {
    console.log(x); // It will access the 'x' from the outer scope.
  }
  inner();
}

outer();
```
- Dynamic scope is a scope resolution mechanism where the scope of a variable is determined based on the call stack during runtime (i.e., the chain of function calls that led to the current point in the code).
```javascript

var teacher ="Kyle";

function ask(question){
console.log(teacher,question);
}

function otherClass(){
var teacher ="Suzy";
ask("why?");
}
otherClass();
```
```javascript

function foo() {
  console.log(x); // The value of 'x' is determined by the caller of foo(), not where foo() is defined.
}

function bar() {
  const x = 5;
  foo();
}


bar(); // Output depends on the value of 'x' in the caller's context.
```
- Function scope is a concept in programming languages where variables declared inside a function are only accessible within the function's block or body and not visible outside of it. This means that variables defined within a function are "scoped" to that specific function and are not accessible from other parts of the code, including other functions or the global scope.
```javascript

function myFunction() {
  const x = 10; // 'x' is scoped to the function myFunction
  console.log(x); // Output: 10
}

myFunction();

console.log(x); // Error: 'x' is not defined because it is not accessible outside the function
```
- IIFE stands for Immediately Invoked Function Expression. It is a design pattern in JavaScript that involves defining a function expression and immediately invoking it. The primary purpose of an IIFE is to create a new scope for variables and avoid polluting the global scope.
```javascript

(function() {
  // Your code here
})();
```
```javascript

var teacher ="Kyle";

( function otherTeacher(){
var teacher ="Suzy";
console.log(teacher);//Suzy
})();
otherTeacher();
console.log(teacher);//Kyle
```
- Block scoping (Encapsulation) is a programming language feature that allows variables to have a scope limited to the block in which they are declared. A block is a set of statements enclosed within curly braces {}. Variables declared with block scoping are only accessible within the block they are defined in, and they are not visible outside of it.
- function exampleFunction() {

```javascript

  if (true) {
    let x = 10; // 'x' is block-scoped to the 'if' block
    console.log(x); // Output: 10
  }

  // 'x' is not accessible here; it is out of scope
  // console.log(x); // Error: 'x' is not defined
}
```
```javascript
var teacher ="Kyle";

{
let teacher="Suzy";
console.log(teacher);//Suzy
}
console.log(teacher);//kyle

## Coding Exersice
[Questions](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day3-tasks/tasks.md)
### Q1
#### My Solution

```javascript

const exampleNormalFunc1 = (a, b, c) => {
  return a * (b + c);
}

const exampleNormalFunc2 = (x, y) => {
  return x * y;
}

const exampleNormalFunc3 = (string) => {
  return string + " " + string + " " + string + "!";
}


const arrowHOF = (normalFunc) => {
  // write your code here;
 return (...args) => {
    return (n = 1) => {
      let result = [];
      for(let i = 0; i < n; i++) {
        result.push(normalFunc(...args));
      }
      return result;
    }
  }
}

const hofNormalFunc1 = arrowHOF(exampleNormalFunc1);
const hofNormalFunc2 = arrowHOF(exampleNormalFunc2);
const hofNormalFunc3 = arrowHOF(exampleNormalFunc3);

console.log(hofNormalFunc1(3, 4, 5)(2)); // logs 60 twice
console.log(hofNormalFunc2(20, 35))(4); // logs 700 four times
console.log(hofNormalFunc3("Meow")()); // logs "Meow Meow Meow!" once

```
### Q2:
```javascript

// Example object
const obj = {
  name: 'John',
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
};

const preserveThis = (func) => {
  // write your code here;
  return func;
}

// Wrap the greet function using preserveThis
const preservedGreet = preserveThis(obj.greet);

// Call the wrapped function as a method of the object
preservedGreet('Hello'); // Output: "Hello, John!"
const preserveThis = (func) => {
  return (...args) => {
    return func.apply(func.__this || this, args);
  };
};


```
### Q3:
- Ex1:
Output = 10
variable x declared inside the outer1 function using var .The inner1 function is defined inside outer1 and is able to access the variable x from its outer scope. When inner1 is called, it logs the value of x, which is 10. This is because the inner1 function has access to the variables in the outer scope (closure) .
- Ex2:
Output = 20
There are two separate variables named x , When the inner2 function is called, it logs the value of the inner x, which is 20. This is because the inner variable x shadows the outer variable x, and the inner function prefers the variable from its own scope.
Since the inner2 function only has access to its own x variable and not the outer x, it logs 20.
