# 🧩 React Internals

## What is React?

Today I learned how React works behind the scenes.

When we write JSX like this:

```jsx
<h1>Hello World</h1>
```

React does not create the HTML element directly.

First, React converts it into a JavaScript object using `React.createElement()`.

Internally, it looks like this:

```jsx
React.createElement("h1", {}, "Hello World");
```

`React.createElement()` takes 3 arguments:

1. **Type** – The HTML tag name.

   ```jsx
   "h1"
   ```

2. **Props** – The properties of the element like `className`, `id`, `style`, etc.

   ```jsx
   { className: "heading" }
   ```

3. **Children** – The text or other elements inside the tag.

   ```jsx
   "Hello World"
   ```

### Example

JSX:

```jsx
<h1 className="heading">Hello World</h1>
```

Internally:

```jsx
React.createElement(
  "h1",
  {
    className: "heading",
  },
  "Hello World"
);
```

### Note

The text inside the element is stored as `children`.

So, every React element is just a JavaScript object.

---

# 📦 ESM (ECMAScript Modules)

Today I also learned about **ESM (ECMAScript Modules)**.

ESM helps us split our code into different files.

We use **import** and **export** to share code between files.

## Named Export

We can export multiple values from one file.

```js
export const name = "Mayur";
export const age = 20;
```

Import:

```js
import { name, age } from "./user.js";
```

---

## Default Export

We can export one default value from a file.

```js
export default function greet() {
  console.log("Hello");
}
```

Import:

```js
import greet from "./user.js";
```

---

# Summary

* React converts JSX into `React.createElement()`.
* `React.createElement()` has three arguments:

  * Type
  * Props
  * Children
* The text inside an element is called `children`.
* ESM helps us organize code into different files.
* There are two types of exports:

  * Named Export
  * Default Export
