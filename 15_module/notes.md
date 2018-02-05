# Classes

## Prototypal inheritence review
* ES6 brought classes to JavaScript, not a new way to do Object Oriented Inheritance.
* Exact same prototypal inheritance; just new way to write them.

* Prototypal inheritance; put a method on the original constructor, it will be inherited.
* Prototype methods; for example create an array. Every instance will inherit.
* Methods can be specific of instance, but can be part of the prototype.

## Classes
* Class declaration; keyword class and name of the class.
* Class expression; function inside variable.

* You need a constructor method if you declare a class. What happens when someone create a version.
* When you declare methods, you don't need a comma in classes.
* Static method; some methods only live on the Array object. Not on instances.
* You can use getters and setters inside a class.

## Extending Classes
* ES6 classes can be extended; you can extend a bass class. A little bit more specific.
* Super; call the thing you are extending. First create an animal before you can create a dog.
* Any new properties do need to be declared with `this`.
* Extending is like the smae thing as adding methods to prototypes.
* You can actually instead native objects.

## Extending Arrays with Classes
* You can extend build-in objects; not with the prototype.
* Whenever you extend something
* At the end of the day, arrays are still objects inside JavaScript.