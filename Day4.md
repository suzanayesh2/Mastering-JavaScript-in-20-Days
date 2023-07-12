# Day 4 : 
## Events & handlers

- The event listener method takes in two parameters, the name of the event being listened for and a handler function to run when that event is detected.
- Events in JavaScript are how we can make our web-pages interactive

## Conditionals
Contionals mean using if and else statements to execute code only under the specified conditions. The if statement executes a statement if a specified condition is truthy; if it evaluates to falsy, the else clause will instead be executed
## Map & filter
 - Filter method : to process an array for specified data and the 
 - Map method : to call a function on each item and create a new array.
- Instead of looping over an array for each item, the spread operator can also be used.
```javascript
    const skills = ["HTML", "CSS", "JS"];
    const newSkills = ["React", "TypeScript", "Node"]
    skills.push(...newSkills);
    console.log(...skills);
```
## Doggos Quiz Game

Asynchronous refers to code that allows a program to have a task be performed alongside the original task (or tasks) without stopping to wait for the task to complete.
## Coding Exercises
- [Use Multiple Conditional (Ternary) Operators
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators)
### My solution
```javascript
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10)); // Output: "positive"
console.log(checkSign(-12)); // Output: "negative"
console.log(checkSign(0)); // Output: "zero"

```
- [Golf Code
](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)
### My solution

```javascript
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0]; // "Hole-in-one!"
  } else if (strokes <= par - 2) {
    return names[1]; // "Eagle"
  } else if (strokes === par - 1) {
    return names[2]; // "Birdie"
  } else if (strokes === par) {
    return names[3]; // "Par"
  } else if (strokes === par + 1) {
    return names[4]; // "Bogey"
  } else if (strokes === par + 2) {
    return names[5]; // "Double Bogey"
  } else {
    return names[6]; // "Go Home!"
  }
}

console.log(golfScore(4, 2)); // Output: "Eagle"
console.log(golfScore(5, 2)); // Output: "Eagle"
console.log(golfScore(4, 3)); // Output: "Birdie"
console.log(golfScore(4, 4)); // Output: "Par"
console.log(golfScore(1, 1)); // Output: "Hole-in-one!"
console.log(golfScore(5, 5)); // Output: "Par"
console.log(golfScore(4, 5)); // Output: "Bogey"
console.log(golfScore(4, 6)); // Output: "Double Bogey"
console.log(golfScore(4, 7)); // Output: "Go Home!"
console.log(golfScore(5, 9)); // Output: "Go Home!"

```
