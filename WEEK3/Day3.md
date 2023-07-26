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
