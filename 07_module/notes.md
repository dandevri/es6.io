# An Array of Array improvementsp

## Array from and of
* New array methods in es6
* Both of them are not on the prototype; they are on the array itself.
* array from; something that is array-ish and converts it to an array (working with dom elements)
* You can see it in the devtools; the `_proto` prototype object

## Array find and findindex
* Array's are always index based so you can't access them with keys.
* Find is a callback return true or false and loops over array
* If you want to find multiple use .filter
* findIndex; where in the array is it? Based on the index

## Array some and every
* Aren't really part of ES6; not enough love
* Some or every of the items meet the criteria.
* some; as soon as it hits it's gonna return true
* every; checks for criterie return true or false.