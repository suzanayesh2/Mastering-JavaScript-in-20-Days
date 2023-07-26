# Day 3 : Scope, Function expressions and Advanced scope
## Function expressions: 
### Lesson Summary:
#### an `example` scope

- Reference error when you try to print what inside anotherTeacher function .

- you can not reassign anotherteacher 

```javascript
function teacher(){}

var myTeacher= function anotherTeacher(){
console.log(annotherTeacher);
}
console.log(teacher);
console.log(myTeacher);
console.log(anotherteacher);//reference error 
```
- Named Function Expression : 
```javascript
var clickHandler =function(){...};
var clickHandler =function keyHandler(){...};
```
- its a Function Expression because its not a function decoration
- function decoration mean if the word function is literally the first thing in the statement 
so if there is a variable or an operator or parentheses or any thing , then it is not a declartion
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

```
