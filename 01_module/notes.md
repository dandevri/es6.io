# Notes - Module 01

## Var scoping refresher
* You can **update** variables and you can also **define* them. The browser doesn't warn you if you define a variable with the same name in the same scope.
* Scoping; where are variables available to me? `var` variables are function scoped. Otherwise global (window)
* Curly brackets `{}` are gatekeepers for your variables.
* You can update global variable inside a function. You ideally want to return it and store that in a variable.
* Variables leak out (e.g. if statement) it scopes it to the window.
 
* Rather than being scoped on the function `let` and `const` are scoped to the block. (curly brackets not only functions)

## Let VS const
* Inside the scope where the variable is declared you can only declare it once. You can ofcourse **update** the variable.
* `const` (constant) variables cannot be updated
* const isn't immutable. You can't update an object but you can update the properties. You can't just reassign it.
* With objects; the object is never going to change but attributes about the object can change with `const`.
* You can use `object.freeze` if you really want to lock an object. (So you can't change the properties)

## Let const real world
* Replacing IFFE; creates scope that nothing is going to leak. No longer leaking into global scope.
* With let and const you don't need an IFFE, cause they are block scoped. You only need the curly brackets.

## Temporal Dead Zone
* With `var` variables you can acces them before they are defined but you can't acces the value.
* Temporal Dead Zone; Can't access a variable before it's defined.

## Is Var dead?
* What should you use? Let, const or var?
* Use const by default, use let if rebinding is needed (update the value of variable), var shouldn't be used.
