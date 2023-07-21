# DAY1: Introduction,Types and Coercion
## Introduction:
### Lesson Summary: 
- About the subjects that will covery this week :
 * Types
• Primitive Types
• Abstract Operations
• Coercion
• Equality
• TypeScript, Flow, etc.

* Scope
• Nested Scope
• Hoisting
• Closure
• Modules

* Objects (Oriented)
• this
• class { }
• Prototypes
• OO vs. OLOO
## Types:
### Lesson Summary:
- Kyle Simpson describe why this statement that every thing in js is an object is false
because most value can be behave as an object so this not makes them to be object.
- Objects:
( object, function ,array ) 
- Not Objects
  (undefined, string, number, boolean, object, symbol, null, bigint (future) )


  - Kyle Simpson describe the main different between undefined, undeclared and uninitialized: 

- Undefined:
   means there is definitely a variable and at the moment it has no value  refers to a variable that has been declared but not assigned any value.
  ```javascript
let x; // x is declared but not initialized, so its value is undefined
console.log(x); // Output: undefined
```
- undeclared 
means console.log(y); // Throws a ReferenceError: y is not defined (undeclared)
 its never been created in any scope that we have access to 

- uninitialized refers to a variable that has been declared but not assigned any value.
let z; // z is declared but not initialized, so its value is undefined
console.log(z); // Output: undefined

z = 10; // Now z is initialized with a value (10)
console.log(z); // Output: 10

