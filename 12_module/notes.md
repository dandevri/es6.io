# ESLint

## Getting started with eslint
* Especially ES6; they have support for the features.
* Looks at your code and tells you what's wrong with it. In the long run it will make you a better developer.
* Catch errors, mostly syntax. Catch them before they cause an issue.
* You want ESlint to run on the command line or in your editor. Automate the process.
* By default eslint doesn't know about ES6. Then you are going to use eslint settings.
* You can do settings globally on your computer or project based. Settings are json.
* You pass all the options in the json file. Json are double quotes.
* You can handy presets, don't specify all the rules.
* When on the ESLint page, spend some time reading the rule.
* Multiple states for a rule; error, warning, off
* Rules override the extends.

## AirBnB Eslint settings
* Is more strict
* You need to install the extends. You can install globally or on project basis.
* Eslint can fix minor things for you, in vscode on save.
* You can setup a global one, it's the fallback.
* It lives in the home (root) directory
* You can also pass an array for rules. These are options for the rule.
* Start with nothing and build your own rules.

## Line and File specific settings
* Specific settings for file or line
* Mostly useful when you are working with libraties, because they set globals.
* Disable for entire file; globals.
* Disable and enable rules; enable disable comments

## ESLint plugins
* You have plugins to lint al these different frameworks
* e.g. lint javascript in script tag instead of .js file. Or inside markdown.
* You can install these plugins globally

## ESLint inside editor
* Ideally you want to set it up inside your editor.

## ESLint passing
* If you work on a team or oss. You want to have your eslint settings in the repo.
* You can then have a Git hook, you can't commit code if there are linting errors. Good for code quality
* If you open the `.git` folder there is one directory called hooks.
* Hooks; code that runs before things happen, stop them from happening for a specific use case. Pre before commit.