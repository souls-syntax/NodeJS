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
