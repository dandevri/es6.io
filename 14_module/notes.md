# ES6 Tooling

## Tool-Free modules
* Webpack isn't the only way to bundle up all your modules.
* jspm sits on top of npm.
* SystemJS is interesting cause you can run it in the browser.
* Don't have to use npm

##  Babel NPM scripts
* ES6 doesn't work in all browsers. That should not stop you from using it. Use Babel.
* Babel; JavaScript compilter. Get browser compliant JS. Compile it down to ES5.
* Use it in every single project ES6 needs to work in. Hand in hand with bundlers. (webpack)
* Only use bundlers if you need imports.

* With babel there are presets and plugins. Every feature JS has they build a plugin for it.
* Preset is collection of plugins. We don't need to transform all of the code.
* We use the babel preset env. You just tell what browsers and version you want to support.
* Babelrc file; but prefer to use the package.json

## Polyfill
* Babel only works on syntax but there are also new methods
* Polyfill; if the browser does not have it, we must recreate it
* Can use Babel polyfill, it uses core-js; if you use modules.
* If you aren't using modules; use polyfill.io
* Inside chrome devtools you can fake the user agent.