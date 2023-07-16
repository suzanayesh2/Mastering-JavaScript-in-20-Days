# DAY3 : Async JavaScript, Promises
## Lesson summary :


- Promises the most signficate ES6 feature
-  Async the feature that makes dynamic web app possible the event loop - js triage,
microtask queue, callback queue and web broweser featiures (APIS) 


- Our core JS engine has 3 main parts : 
  * Thread of exection
  * Memory /variable environment
  * Call stack
- We need to add some new components:
  * Web Browser APIs/Node background APIs
  * Promises
  * Event loop, Callback/Task queue and micro task queue
- The key features that the browser provides. To interact with the features that the browser offers, JavaScript offers "facade functions" that look like JavaScript, but are actually part of the browser. Examples of these functions include console, fetch, document, and setTimeout.

- By using Promises and the event loop, we can handle asynchronous operations more effectively, ensuring that the thread of execution is not blocked during background web browser work, and we can handle the results or errors in a structured manner once the work is completed.

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
