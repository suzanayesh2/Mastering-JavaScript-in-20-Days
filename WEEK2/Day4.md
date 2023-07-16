
# DAY 4: Classes & Prototypes 
### Lessons summary :
- ES6+ Solution(Promises) Using two-pronged 'facade' functions that both :
  * initiate background web browser work and 
  * return a placeholder object (promise) immediatley in JS
- classes and prototypes are important to learn as a developer, and what will be learned in the upcoming sections. The core idea of development is covered to understand how code should be structured, and how developers write code to be easy to reason about, easy to add new functionality, and efficient. The argument is made that object oriented programming is all of these things.
- Prototype chain - the feature behind the scenes that enables emulation of OOP but is a compelling tool in itself 
- The prototype chain, or __proto__ as a way to access functions that were set when Object.create() is used to instantiate an object.
- In modern JavaScript, the preferred approach is to use classes or constructor functions with the new keyword. This automates the process of creating objects, ensures the prototype chain is set up correctly, and avoids duplicating functions for each object.
- Question1:
  * whether only functions can be referenced on the prototypal reference chain, and a clarification as to whether an Object.create() argument is always the __proto__ property. How to visually see the __proto__ property in the console is briefly covered.
  *  The execution context created when a function called on the prototypal reference chain is diagrammed, and it's demonstrated how the implicit parameter set in the execution context allows the function work with individual objects despite being shared.
- Question 2:
  * What if we want to confirm our user1 has the property score 
  * we can use the hasOwnProperty method - but where is it ? is it on user 2? 
  * All objects have a__proto__ property by default which defults to linking to a big object -Object.prototype full of (somewhat) useful functions 
- we get access to it via userFunctionStores __proto__property-the chain 
- This keyword rules are overridden when used with arrow functions, because of when arrow function contents are evaluated.
