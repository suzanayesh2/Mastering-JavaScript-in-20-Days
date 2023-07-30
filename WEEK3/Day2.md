# Day2: Static typing and Scope
## Static typing
### Lessons Summary:
 - The `Benefits` and drawbacks of using tools like TypeScript and Flow for type checking.
    1. Catch type-related mistakes
    2. Communicate type intent
    3. Provide IDE feedback
 - Caveats:
    1. Inferencing is best-guess, not a guarantee
    2. Annotations are optional
    3. Any part of the application that isn't typed introduces uncertainty
  
 - Benefits of static typing:
   1. They make types more obvious in code .
   2. Familirtiy : they look like other languages type systems.
   3. Extremely popular these days .
   4. They are very sophisticated and good at what they do.

 - JavaScript has a (dynamic) type system, which uses verious forms of coercion for value type conversion, including equality comparisons
 ##### Addtion from ChatGPT:
- Flow : is a static type checker developed by Facebook. It also introduces optional static typing to JavaScript, but unlike TypeScript, it requires explicit annotations using special comments (e.g., // @flow) to enable type checking on a per-file basis.
- TypeScript : is a superset of JavaScript developed by Microsoft. It adds optional static typing to JavaScript, allowing developers to define types for variables, function parameters, return values, and more.

## Scope :where to look for things
### Lessons Summary:
- Scope: where to look for things
  * Nested Scope
  * Hoisting
  * Closure
  * Modules

 
#### Globla Scope : 
```javascript
var teacher = "Kyle" ;
function otherClass()
{
var teacher ="suzy";
consol.log("WElcome");
}
otherClass();//Welcome
```
 - compilation(output) and execution(code)
 -Execution :
```javascript
1- var teacher ="Kyle"
2- function otherClass(){
teacher="Suzy";
5- topic="React"
Console.log("Welcome");

}
3- otherClass();//welcome
teacher;
topic;
```
#### Nested Scope:
```javascript
var teacher = "Kyle" ;
function otherClass()
{
var teacher ="suzy";
function ask(question){
console.log(teacher,question);

}
ask("why");

}

otherClass();  //Suzy Why ?
ask("????);
```

- The difference between a variable that is undefined versus one that is undeclared :
   * undefined means a varible exists  and at the moment doent have a value
   * undeclared : never formally declared in any scope that we have accessed to 
##### Examples from ChatGPT:
 #### Hositing Scope
```javascript
// Example of hoisting with variable declaration
console.log(x); // Output: undefined
var x = 10;

// Example of hoisting with function declaration
foo(); // Output: "Hello, World!"
function foo() {
  console.log("Hello, World!");
}

```
#### Clouser Scope
```javascript
function outerFunction() {
  var count = 0;
  
  function innerFunction() {
    count++;
    console.log(count);
  }
  
  return innerFunction;
}

var closureExample = outerFunction();
closureExample(); // Output: 1
closureExample(); // Output: 2
closureExample(); // Output: 3

```
#### Module Scope
```javascript
var myModule = (function() {
  var privateVariable = "I am private!";
  
  function privateFunction() {
    console.log(privateVariable);
  }
  
  return {
    publicFunction: function() {
      console.log("I am public!");
    }
  };
})();

myModule.publicFunction(); // Output: "I am public!"
myModule.privateFunction(); // Error: privateFunction is not defined
console.log(myModule.privateVariable); // Error: privateVariable is not defined

```
## Coding Exersice
[Questions](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day2-tasks/tasks.md)
### Q1
#### My Solution
```javascript
function testScope1() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}

testScope1();

```
B)
1
Undefined
ReferenceError


Explanation: In the testScope1 function, we have a block of code inside the if (true) statement. Within that block, we declared three variables: var a, let b, and const c. The has function-level scope, while let and const have block-level scope. so They are only accessible inside the block where they are declared. So, when we try to access b and c outside the block, we will get a ReferenceError because they are not defined in that scope.
