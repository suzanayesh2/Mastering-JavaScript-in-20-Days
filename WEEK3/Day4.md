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
