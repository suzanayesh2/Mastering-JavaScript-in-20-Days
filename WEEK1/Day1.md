# Day1 :
Those lessons to describe javascript :[Frontend Masters course “JavaScript First Steps"](https://frontendmasters.com/workshops/javascript-first-steps/) 
## introduction :
In summary, JavaScript is a powerful and flexible programming language that enables developers to create interactive and dynamic web pages.
## DOM :
The DOM (Document object model)represents the structure of a document as a tree , its a way to interact developer with web page .
simple Dom tree : 
## Coding Exercise
[Concatenating Strings with the Plus Equals Operatorhttps://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)
### My solution
```javascript
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

console.log(myStr);

```

![dom](https://github.com/suzanayesh2/Mastering-JavaScript-in-20-Days/assets/138245896/886b6eb6-f808-48e7-b497-d2a48677c5f4)
Example : when you write in console (inspect)
document.title --> to get the title of this page
## Values & Data Types
 The different values and data types used in JavaScript, including how to tell the type difference between "24" and 24. Primitive data types include string, number, boolean, undefined, null, bigint, and symbol.
 [Find the Nth-to-Last Character in a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)
### My solution
 ```javascript
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line
```
 ### values : 
 chunks of information we want to wark with.
 ###### JS has two kinds of data:
- Primitive types (strings, numbers, boolean , undefined, null )
- Objects (document & friends..)
 
## Operators
 - The various operators and the different effects they can have on values in JavaScript. In JavaScript, Arithmetic operators respect the order of operations and can be grouped using parenthesis.
-  ===, == ,*, %, !==,+,-,,> , <

## Coding Exercise
[Compound Assignment With Augmented Multiplication](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)
### My solution
```javascript
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```