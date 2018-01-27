# Notes - Module 02

## Arrow Functions Introduction
* Are more concise then regular functions
* Implicit returns
* Rebind the value of `.this`

* Delete the word function and use an fat arrow.
* If you have one parameter you don't have to use `()`
* Explicit return; if you write the return keyword
* Implicit return; remove curly brackets it will assume you want to implicit return

* Arrow functions are always anonymous; don't have a name. Not good for stack traces.
* You can however put them in a variable.

## More arrow function examples
* Arrow functions are helpful in callback situation
* How do you implicit return an object literal (with curly brackets)

## Arrow functions and this
* This keyword does not get rebound with arrow functions
* When you use `this` inside event listener it does not get rebound inside the function. Inherit from the parent.
* So in an eventlistener (with timeout) you can use a arrow function.
* Use arrow functions inside of a normal function when using `this`

## Default function arguments
* You can set default values in the function parameters.
* Instead of creating if statements for undefined.
* You can pass undefined to explicit return the default parameter

## When not to use arrow functions
* When you really need this
* When you need a method to bind to an object
* When you need to add a prototype method
* When you need arguments objects

## Exercies
* A node list doesn't have any methods, so you need to convert it.
* Chain the map and refude filters on eachother.