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

