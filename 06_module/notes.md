# Iterables & Looping

## The for of loop
* New type of loop; any type of data which isn't iterable
* Iterable; anything that can be looped over
* `for loop` / `.forEach`
* With a `.forEach` you can't stop the loop
* For in loop also iterates over methods from the prototype
* For of loop is the best choice above all other examples, except objects.

## The for of loop in action
* Generators; `.entries` `iterator`. You can get the index and the value.
* You can destructure entries from the iterator
* In almost all cases (except object) you can use for of.
* Also useful when you try and iterate over the arguments object
* Arguments keyword; you don't have to convert to true array
* Put const in for of loop

* Dom collections (nodelist), not true arrays.

## For of with Objects
* You can't iterate over an object
* You can use `entries`
* You can use `keys`