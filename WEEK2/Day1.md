# DAY 1: Introduction, JavaScript Principles, Functions & Callbacks: 

## Lesson Summary:
- In summary, JavaScript executes code line-by-line, saves data and functions in memory, creates execution contexts for functions, and maintains a call stack to track the currently executing function.
- The call stack keeps track of the currently running function, indicating the location of the thread of execution.
-The three core components is Thread of execution , Memory and Call stack 
- By defining parameters, making functions reusable, and leveraging callbacks and higher-order functions, we can create more versatile and maintainable code that follows the DRY principle.
## Code Exercises: 
[Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)
 ## My solution :
```javascript
const squareList = arr => {
  return arr
    .filter(num => num > 0 && Number.isInteger(num))
    .map(num => num * num);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); // Output: [25, 9]

```
