
# Day 2: Closures
### Clouser : 
* is the most esoteric of js concepts.
* Enables powerful pro-level functions like once and memoize .
* many js design patterns including the module pattern use closure 
* Build iterators, handle partial appliction and maintain state in an asynchronous world
### Questions Code :
#### Question 1 :
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
