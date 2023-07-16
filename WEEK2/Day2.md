
# Day 2: Closures
### Clouser : 
* is the most esoteric of js concepts.
* Enables powerful pro-level functions like once and memoize .
* many js design patterns including the module pattern use closure 
* Build iterators, handle partial appliction and maintain state in an asynchronous world
### Questions Code :

#### Question 1: Functions and Callbacks
Implement a JavaScript function called mapAsync that takes an array and a callback function. The function should map each element of the array to a new value using the callback function asynchronously.

The final result should be returned as a Promise.
*Some Help from ChatGPT*

```javascript
function mapAsync(array, callback) {
  return new Promise((resolve, reject) => {
    const mappedArray = [];

    async function processArray(index) {
      if (index >= array.length) {
        resolve(mappedArray);
        return;
      }

      try {
        const result = await callback(array[index]);
        mappedArray.push(result);
        processArray(index + 1);
      } catch (error) {
        reject(error);
      }
    }

    processArray(0);
  });
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const doubledArray = mapAsync(array, async (num) => {
  return num * 2;
});

doubledArray
  .then((result) => {
    console.log(result); // Output: [2, 4, 6, 8, 10]
  })
  .catch((error) => {
    console.error(error);
  });
```
#### Question 2 :
Question 2: Call Stack and Recursion
Write a JavaScript function called sumRange that calculates the sum of all integers in a given range. The function should use recursion to handle the calculation and demonstrate understanding of the call stack.

