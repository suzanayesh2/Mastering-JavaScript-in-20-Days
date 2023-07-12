# Day3 : Quiz Project , Quiz Project Functions
## Code Exrsices :
- [Return a Value from a Function with Return
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)

### My Solution
```javascript
function timesFive(num){
return num*5;

}
```
- [Global Scope and Functions
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)
### My Solution 
```javascript
// Declare the myGlobal variable below this line
let myGlobal=10;
let oopsGlobal;

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal=5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

```
- [Local Scope and Functions
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)
### My Solution
```javascript
function myLocalScope() {
  // Only change code below this line
let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

```
- [Global vs. Local Scope in Functions
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)
### My Solution
```javascript
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear="sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
```
