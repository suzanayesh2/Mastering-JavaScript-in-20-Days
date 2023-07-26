# Day 3 : Scope, Function expressions and Advanced scope
## Function expressions: 
### an example scope

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
