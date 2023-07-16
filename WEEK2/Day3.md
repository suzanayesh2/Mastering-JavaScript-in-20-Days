# DAY3 : Async JavaScript, Promises


### CODE EXRCISES:
[Pair programming challenges :Asynchronicity](http://csbin.io/async)

## My solution 
 ```javascript
/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
 //testMe(); // what order should these log out? Howdy or Partnah first? Answer : Partnah FIRST THEN Howdy .


/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(()=>{
    console.log("welcome")
  },3000)
}
// Uncomment the following line to check your work!
 //delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  console.log("hello")
  setTimeout(()=>{
      console.log("good bye")

  },2000)
}
// Uncomment the following line to check your work!
 //helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
  // ADD CODE HERE
  console.log("hi again")
  setTimeout(brokenRecord,1000)
}
// Uncomment the following line to check your work!
 //brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  let count = 0;
  let id = setInterval(() => {
    console.log("hi for now");
    count++
    if(count >= 5) {
      clearInterval(id)
    }
  }, 1000)
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func,interval,duration) {
  // ADD CODE HERE
   let count = 0;
  let id = setInterval(() => {
func()
    count+=interval
    if(count >= duration) {
      clearInterval(id)
    }
  }, interval)
}

// Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
```
