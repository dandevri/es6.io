# Template Strings

## Template strings introduction
* If you want to use a variable in a string it's a bit of pain, concatenate etc.
* You can also use template literals. Not single or double quotes but backticks.
* You can also do javaScript in the variable placeholders.

## Creating HTMl fragments with Template literals
* Multiple lines without problems 
* Render proper HTML without document.create elements.
* You can nest template strings inside of eachother.
* How do you do if statements? You can easily use ternary operators in template literals.
* What if the data is getting a bit more complex? You can create a render function.
* You can use functions inside template tag.

## Tagged template literals
* Run trough a function, control over how the string is made. Like a step in between.
* The parameters of the function can be the rest operator.
* Strings are all the seperate strings, values are the variables.
* We can use the function to build the string ourselves rather than the browser doing it. 
* For example, you can style the string based on variables.

## Tagget template Exercise
* Add abbreviation or something to each function

## Sanitizing User Data with tagged Templates
* Sanitize data before you put it into the dom
* When you get data from a user; make sure the user isn't doing any sneaky stuff. Insert or iframe etc.
* Never let users run JavaScript on the page.
* DOMPurify library; strip out with tagged templates