# Node

---

**What is NodeJS**

1. Runtime enviroment
2. Backend
3. CLI
4. Drone

- Could be said to be wrapper around js engine as primarily objective, tho there are many more uses of it.

---

## Browser vs NodeJS

### Browser
Global object := windows

Browser features := webAPI

Can use document


### Node
Global object := global

Can't use document webAPI

Can use all other webAPI

Give access to file system

---

**How many types of module are there** := 2
1. CommonJS -> (Old way) -> NodeJS(Default) => require()
2. ESmodule -> (Mew) -> React(Default) => import

**What is NPM**
Node package manager

### Packages availabe by default in Node

1. File system
2. Path
3. OS
4. http/https
5. crypto

`require` keyword is used to import these Packages
```javascript
require('./Lecture1/node_intro/app.js')
```

By default we get empty object as value when we require something

---

When you need to require the folder then it's must to have a index.js in that folder. It basically is the entry point to the package.
Kinda like how it is main() function in C, you import the file in index of package and then export from there so you that is how you do it.


```javascript
// File: ./myPackage/index.js
module.exports = {
  moduleA: require('./moduleA'),
  moduleB: require('./moduleB')
};

// Now, in another file where you want to use the package...
const myPackage = require('./myPackage');
console.log(`${myPackage.moduleA.myVar} ${myPackage.moduleB.myVar}`);  // prints: Hello World
```
In this example, `index.js` is at the root of a package named `myPackage` that exports all other modules
(`moduleA` and `moduleB`) from it. This way, you can import the whole package with one line instead of requiring
each module separately, keeping your code more readable and organized.

---

- You don't have prompt function in node hence you have to provide input using argv only.

```JS
let input = console.log(process.argv.slice(2));
```

# Day 3

## Require file, folder.

There are two types of modules

1. CommonJS => NodeJS
2. ESmodule => React


