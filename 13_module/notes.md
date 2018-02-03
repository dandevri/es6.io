# JavaScript modules and Using NPM

## JavaScript modules
* Before add script tags in body or build process etc.
* With ES6 it's more common to use modules
* JavaScript module; file with many functions. You can make these functions available.
* No script tags; but we import things from existing modules.
* ES6 syntax has pretty good support, but ES6 modules not so well.

* There are lots of ways to get modules. Standard way is NPM. 
* Package.json saves all the references to packages.
* Node modules is dependency tree, so they need dependencies of their own.
* If it's a devlopment tool, save it as an dev depency. You don't use it in your app.
* Babel; will convert ES6 code and convert it to ES5 code.

* Node doesn't support ES6 import, that's why you use require.
* Loaders; how do I handle files?
* Plugins; after loaders. Compress JS for example.

* Nice way to run webpack is using npm scripts. You don't have to globally install.

## Creating own modules
* Variables are not global when using modules, scoped to module.
* You need to export your own modules

* Default export; import as any name
* Named export; as variable name.

* Every module can only have one default export but you can have multiple named exports.
* You have to put curly brackets if its a named export.
* You can rename with the `as` keyword.

## More module practice
* Create a file with named and default export
* If you need something twice, you import it twice.