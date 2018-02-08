# Async Await

## Native promises review
* Native promises that are part of the browser. New apis are mostly promise based. No callbacks.
* If you store a promise in a variable it will not contain the data.
* Fetch doesn't assume the data is json.

* Fetch example
* Webcam example with getusermedia
* Built in native promises

## Custom Promises
* Any function that returns a promise has an promise api. You can use then and catch or async await.
* It's not a function we want to run immediately
* example breathe function; callback hell.
* Promise accept resolve and reject function
* You can reject inside a promise and throw an error
* Error got thrown but didn't catch the error.
* How can we make chaining `.then` look a little better with async await.

## All About Async Await
* Sync; you wait for the task to be done with the rest of the code.
* Async; start the task and move onto next value.
* Most things in JS move on, you don't want to block the rest of JS. (alert is blocking)
* This is a problem if you want to do Flow Control; stop the flow of JS.
* We need a way, not really pause but just wait section but not blocking.

* You first need to create an async function
* Inside of that function you can await values
* At the core async await is build on top of promises, not a alternative.
* Functions are still based on promises but you await the values.
* You can only use await inside function that's marked async
* By putting await in front of promise will return the response.
* There is no top level await, you must have a async function

## Async Await error handling
* Pretty simple, but it doesn't look nice in your code.
* Wrap the await code in try catch.
* More complicated is high order function
* Any function can be created into an async function

* High order function; wrap in catch all function
* Try and catch for every single route or page is not very efficient.
* High order function; Takes a function as an argument and return a new function to yourself. 
* Create a function that caches the error.
* You can pass in arguments with `...args` spread and rest operator

## Waiting on Multiple Promises
* Be careful with await; not always do you want one thing after other.
* You want to fire different tasks and all of them to come back at the same time.

## Promisify callback functions
* Async await and promises are really nice to write, but still alot of browser api's are callbacks.
* With async and promises you can promisify these functions.