# Day2 : 
## Expressions:
 Expressions is a valid set of literals, variables, and operators that resolve to a single value.
## Arrays
 Items are arranged in an array, the array index, finding the .length of an array, and how to check if an array contains a specific value. Replacing, removing, and appending array items are also demonstrated in this segment.
## Objects
In JavaScript, objects are one of the fundamental data types and are used to store collections of key-value pairs
## Coding Exercises
- [Profile Lookup](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)
### My solution
```javascript
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

// Change these values to test your function
var data = lookUpProfile("Sherlock", "hello");

console.log(data);
```

- [Copy Array Items Using slice()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)
### My Solution
```javascript
function forecast(arr) {
  // Only change code below this line
  var todaysWeather = arr.slice(2, 4);
  return todaysWeather;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


```
- [Combine Arrays with the Spread Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)

```javascript
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence =['learning',...fragment,'is','fun']; // Change this line
  return sentence;
}

console.log(spreadOut());
```