# Promises

## Introduction
* Are often used when you are fetching a JSON API
* Promise; something that will happen between now and the end of time
* Something that will happen in the future, but not immediately.
* JS is async; it putting stuff up the que. Puts a promise in the variable.

* `then` function; we can listen to a promise. Only run when the data comes back.
*  Chain `then` together
* Then will only fire when a promise sucessfully comes back.
* Catch runs when error.

## Building Promises
* Promises are build into alot of browser APIs
* It resolves or rejects
* Promises all boil down to; I don't want to stop javascript from running.
* Wrap error inside error object

## Chaining Promises
* When you need some sort of flow control (mostly on the back-end)
* Chain promises if you return; waterfall approach

## Multiple Promises
* Sometimes you just want to fire them all, and not wait for each promise.
* You can use `.all`, instead of chaining then.
* Wait for every promise to resolve and `.then`.
* Different types of data that comes back, not always json.
* `.json` returns a second promise which you can then.