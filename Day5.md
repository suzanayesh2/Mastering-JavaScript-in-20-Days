# Day5
## Data Fetching & Promises

- Using the fetch function to load data from an API endpoint on the internet. If the request is successful, the API will respond with data contained in a JSON object.
- Using the await operator to wait for a Promise and obtain its resulting value. If the await operator is not used, JavaScript will return the promise object without the value of the promise.
- The Promise we get it from fetch that resolve to a Response object or Rejected or fulfilled.
## Destructuring Data

 Destructuring as a method to declare multiple variables at once by retrieving the values from the parent object. Altering the destructuring syntax to use square brackets allows the destructuring of arrays

## Async
An asynchronous function is a special type of function that allows you to write asynchronous code using await expressions.


## Modules
- Modules are a way to organize and encapsulate code. They allow you to split your code into separate files and control the visibility of variables and functions within those files.
- export lets us expose variables from our module's
scope to the outside world
-import lets us use an exposed variable from
another module
- Error Handling by try catch
  ``` javascript
try {
    thisMightThrowAnError();
} catch (error) {
    console.error("As if! Error:", error); 
    console.log("Whatever, let's press on anyway");
}
console.log("still rollin' with the homies");


   ```
## Wrapping up
