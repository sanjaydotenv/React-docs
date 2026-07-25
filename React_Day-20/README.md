# ⚡ React Performance Optimization

React is already fast because it uses the **Virtual DOM** and an efficient rendering process. However, every render is not always necessary. Sometimes React renders components even when their data hasn't changed.

In small projects this isn't a big issue, but in large applications unnecessary rendering can reduce performance. To solve these problems, React provides three optimization techniques.

- **React.memo** → Prevents unnecessary component rendering.
- **useCallback** → Prevents unnecessary function recreation.
- **useMemo** → Prevents unnecessary calculations.

In this README, we'll understand all three concepts with practical examples.

---

# 🧩 React.memo

## What is React.memo?

`React.memo` is a Higher Order Component (HOC) that memoizes a component. It compares the previous props with the new props. If the props are the same, React skips rendering that component.

Simply put, **React.memo only re-renders a component when its props actually change.**

> 💡 **Note**
>
> `React.memo` only works with **Functional Components**.

---

# 🤔 Why Do We Need React.memo?

Let's understand the problem first.

```jsx
const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>Count is :- {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Home />

    </div>
  );
};
```

---

## 🧐 Code Explanation

### `const [count, setCount] = useState(0)`

A state variable named **count** is created. Whenever its value changes, React renders the **App** component again.

---

### `setCount(count + 1)`

Every button click updates the state.

Updating a state means React needs to render the component again so the UI can display the latest value.

---

### `<Home />`

The **Home** component doesn't use the `count` state.

Still, because it is inside the `App` component, React renders it again whenever `App` renders.

---

## ⚙️ Rendering Flow

```text
Button Click
      │
      ▼
Count Updated
      │
      ▼
App Rendering
      │
      ▼
Home Rendering ❌
```

Notice something important.

Only the **count** value changed.

The **Home** component didn't receive any new data.

Even then it rendered again.

This is called an **Unnecessary Re-render**.

---

# 🚀 Solution - React.memo

To prevent this unnecessary rendering, React provides **React.memo**.

Simply wrap the component.

```jsx
import React from "react";

const Home = () => {

  console.log("Home Rendering...");

  return (
    <div></div>
  );
};

export default React.memo(Home);
```

That's it.

Now React starts comparing the previous props with the current props before rendering the component.

---

## 🧐 Code Explanation

### `React.memo(Home)`

This wraps the **Home** component inside React.memo.

Before rendering the component, React checks whether the props have changed or not.

---

### `console.log("Home Rendering...")`

This helps us verify whether the component is rendering or being skipped.

Open the browser console and click the button.

You'll notice that **Home Rendering...** no longer appears every time.

---

## ⚙️ How React.memo Works

```text
App Rendering
      │
      ▼
React.memo
      │
      ▼
Compare Previous Props
      │
      ▼
Props Changed ?
   │
 ┌─┴─────────┐
 │           │
No          Yes
 │           │
 ▼           ▼
Skip      Render
```

---

# 📦 Passing Props

Now let's pass a prop.

```jsx
const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>Count is :- {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Home count={count} />

    </div>
  );
};
```

Now the **Home** component is receiving data.

Whenever **count** changes, React detects a new prop.

Because the prop changed, React renders the component again.

---

## 🧐 Code Explanation

### `<Home count={count} />`

Here we're passing the **count** value to the child component.

Whenever **count** changes, React sends a new value.

Because the prop is different, React.memo allows rendering.

This is the correct behavior because the UI should display the latest value.

---

## ⚙️ Rendering Flow

```text
Button Click
      │
      ▼
Count Changed
      │
      ▼
New Prop
      │
      ▼
Home Rendering ✅
```

---

# ⚠️ React.memo Doesn't Always Stop Rendering

Many beginners think React.memo stops every render.

That's not true.

Let's look at another example.

```jsx
const App = () => {

  console.log("App Rendering...");

  const [user, setUser] = useState({
    name: "hello",
    id: 1,
  });

  return (

    <div>

      <h1>Name is :- {user.name}</h1>

      <button
        onClick={() =>
          setUser(prev => ({
            ...prev,
            name: "World"
          }))
        }
      >
        Change Name
      </button>

      <Home user={user} />

    </div>

  );

};
```

---

## 🤔 What's Happening Here?

We're passing an **object** as a prop.

```jsx
<Home user={user} />
```

Objects are **Reference Data Types**.

Whenever React creates a new object, its memory reference also changes.

Even if both objects contain the same values, React sees them as different objects.

---

## Example

```text
Old Object

{
  name: "hello",
  id: 1
}

↓

New Object

{
  name: "hello",
  id: 1
}
```

Although the values look identical,

their references are different.

```js
{} === {}
```

Result

```text
false
```

Because React compares references instead of values, it thinks a new prop has arrived.

As a result,

**Home renders again.**

---

# 🎯 Custom Comparison Function

React.memo also accepts a second argument.

```jsx
React.memo(Component, compareFunction)
```

This callback receives two objects.

```jsx
(prevProps, nextProps)
```

Now we can decide ourselves whether React should render the component or not.






---

# 🛠 Custom Comparison Function

Sometimes the default comparison performed by **React.memo** is not enough. This usually happens when we pass **Objects**, **Arrays**, or **Functions** as props.

Since these are **Reference Data Types**, React compares their memory references instead of their values. Even if the data looks exactly the same, React still considers it a new prop and renders the component again.

To solve this problem, React allows us to provide our own comparison logic.

```jsx
const Home = ({ user }) => {

  console.log("Home Rendering...");

  return <div></div>;

};

export default React.memo(Home, (prevProps, nextProps) => {

  return prevProps.user.name === nextProps.user.name;

});
```

---

## 🧐 Code Explanation

### `React.memo(Home, callback)`

The second parameter is a comparison function.

Before rendering the component, React calls this function and asks,

> **"Should I render this component or not?"**

Now the decision is completely in our hands.

---

### `prevProps`

`prevProps` contains the props from the previous render.

```jsx
prevProps.user.name
```

If the previous user name was

```text
hello
```

then `prevProps.user.name` will return

```text
hello
```

---

### `nextProps`

`nextProps` contains the props from the current render.

```jsx
nextProps.user.name
```

If the latest value is

```text
World
```

then this expression returns

```text
World
```

---

### `return prevProps.user.name === nextProps.user.name`

This line performs the comparison.

```jsx
return prevProps.user.name === nextProps.user.name;
```

If both values are equal,

```text
hello === hello

↓

true
```

React skips rendering the component.

If the values are different,

```text
hello === World

↓

false
```

React renders the component again.

---

## ⚙️ Internal Flow

```text
App Rendering
      │
      ▼
React.memo
      │
      ▼
Custom Comparison Function
      │
      ▼
Name Changed ?
   │
 ┌─┴─────────┐
 │           │
No          Yes
 │           │
 ▼           ▼
Skip      Render
```

---

## 📌 Important Points

- React.memo performs **Shallow Comparison** by default.
- Objects, Arrays and Functions are compared by **Reference**.
- A new object reference always looks different to React.
- Use a **Custom Comparison Function** when you only want to compare specific values.
- Return **true** to skip rendering.
- Return **false** to render the component.

---

# ⚡ useCallback

## What is useCallback?

`useCallback` is a React Hook that memoizes a **function**. Instead of creating a new function on every render, React stores the same function reference and reuses it until one of its dependencies changes.

In simple words,

> **useCallback remembers the function, not its returned value.**

Many developers confuse `useMemo` and `useCallback`.

A simple trick to remember them is:

- **useMemo → Remembers a Value**
- **useCallback → Remembers a Function**

---

# 🤔 Why Do We Need useCallback?

Let's understand the problem first.

```jsx
const App = () => {

  console.log("App Rendering...");

  const [count, setCount] = useState(0);

  const greet = () => {
    console.log("hello good morning");
  };

  return (
    <div>

      <h1>Count is :- {count}</h1>

      <button
        onClick={() => setCount(prev => prev + 1)}
      >
        Increase
      </button>

      <About greet={greet} />

    </div>
  );

};
```

At first glance this code looks completely fine.

We simply created a function called **greet** and passed it to the **About** component.

```jsx
<About greet={greet} />
```

Since **About** is wrapped with `React.memo`, we expect that it shouldn't render again.

But surprisingly,

**About still renders every time.**

---

# 🤨 Why Does This Happen?

Functions are also **Reference Data Types**.

Whenever the **App** component renders,

JavaScript creates a **brand new function**.

Even though the code inside the function is exactly the same,

its memory reference becomes different.

---

## Example

First Render

```text
greet

↓

Function A
```

Second Render

```text
greet

↓

Function B
```

Third Render

```text
greet

↓

Function C
```

Although all three functions do the same work,

they are stored at different memory locations.

Because of this,

React thinks a **new prop** has been received.

As a result,

the **About** component renders again.

---

## ⚙️ Rendering Flow

```text
Button Click
      │
      ▼
Count Updated
      │
      ▼
App Rendering
      │
      ▼
New greet Function
      │
      ▼
About Receives New Prop
      │
      ▼
About Rendering ❌
```

Notice carefully.

The problem is **not** React.memo.

The problem is that every render creates a **new function reference**.

React only compares references.

It never compares the function body.


---

# 🚀 Solving the Problem with `useCallback`

To solve this issue, React provides the **`useCallback`** Hook.

Instead of creating a new function on every render, `useCallback` stores the function in memory and returns the same function reference until one of its dependencies changes.

Because the function reference remains the same, React understands that the prop hasn't changed and `React.memo` skips rendering the child component.

Let's update our previous example.

```jsx
const greet = useCallback(() => {

  console.log("hello good morning");

}, []);
```

Now pass the same function to the child component.

```jsx
<About greet={greet} />
```

That's it.

With just one small change, React starts using the same function reference on every render.

---

# 🧐 Code Explanation

### `useCallback()`

```jsx
useCallback(() => {

}, []);
```

The `useCallback` Hook memoizes a function.

Instead of creating a brand new function every time, React stores the previous function and reuses it whenever possible.

---

### Callback Function

```jsx
() => {

  console.log("hello good morning");

}
```

This is the function that React stores.

Without `useCallback`, JavaScript creates this function on every render.

With `useCallback`, React keeps the same function reference until the dependency array changes.

---

### Dependency Array

```jsx
[]
```

The dependency array tells React **when a new function should be created**.

Because the dependency array is empty,

React creates the function only once.

Every future render simply reuses the previous function.

---

# 🔍 Your Complete Example

```jsx
import React, { useCallback, useState } from "react";
import About from "./components/About";

const App = () => {

  console.log("App Rendering...");

  const [count, setCount] = useState(0);

  const greet = useCallback(() => {

    console.log("hello good morning");

  }, []);

  return (

    <div>

      <h1>Count is :- {count}</h1>

      <button
        onClick={() => setCount(prev => prev + 1)}
      >
        Increase
      </button>

      <About greet={greet} />

    </div>

  );

};

export default App;
```

---

# 🧐 Understanding Every Part

### `const greet = useCallback(...)`

Instead of creating a normal function, we're asking React to remember this function.

Now React stores its reference and returns the same function whenever the component renders again.

---

### `<About greet={greet} />`

The memoized function is passed to the child component.

Since the function reference doesn't change anymore, React thinks the prop is still the same.

Because of that, `React.memo` skips rendering the component.

---

### `setCount()`

Clicking the button still renders the **App** component because its state changes.

However, `About` no longer renders because the `greet` function reference never changes.

---

# ⚙️ Rendering Flow After useCallback

```text
Button Click
      │
      ▼
Count Updated
      │
      ▼
App Rendering
      │
      ▼
useCallback
      │
      ▼
Same Function Reference
      │
      ▼
React.memo
      │
      ▼
Props Changed ?
   │
 ┌─┴─────────┐
 │           │
No          Yes
 │           │
 ▼           ▼
Skip      Render
```

---

# 🧩 About Component

```jsx
import React from "react";

const About = ({ greet }) => {

  console.log("About Rendering...");

  return (
    <div>
      <h1>This is About</h1>
    </div>
  );

};

export default React.memo(About);
```

---

## 🧐 Code Explanation

### `({ greet })`

The component receives the `greet` function as a prop.

Whenever React detects a different function reference, it renders the component again.

---

### `React.memo(About)`

React.memo compares the previous function reference with the current one.

Without `useCallback`, every render creates a new function, so React thinks the prop has changed.

With `useCallback`, the same function reference is reused, allowing React.memo to skip rendering.

---

# 📌 What If Dependencies Change?

The dependency array controls when React should create a new function.

Example:

```jsx
const greet = useCallback(() => {

  console.log(user.name);

}, [user]);
```

Now the function depends on the **user** object.

Whenever `user` changes,

React creates a new version of the function.

```text
User Updated
      │
      ▼
Dependency Changed
      │
      ▼
New Function Created
      │
      ▼
About Receives New Prop
      │
      ▼
About Rendering ✅
```

This is the correct behavior because the function now depends on updated data.

---

# 📌 Important Points

- `useCallback` memoizes a **function**.
- It returns the **same function reference** until dependencies change.
- It is mostly used with **React.memo**.
- Without `React.memo`, `useCallback` usually doesn't provide any visible optimization.
- Don't use `useCallback` everywhere. Use it only when function recreation causes unnecessary rendering.

---

# 💡 Quick Recap

| Without useCallback | With useCallback |
|----------------------|------------------|
| New Function Every Render | Same Function Reference |
| Child Receives New Prop | Child Receives Same Prop |
| Child Renders Again | Child Rendering Skipped |
| Extra Rendering | Better Performance |

---

# ⚡ React `useMemo`

After solving unnecessary component rendering with **React.memo** and unnecessary function recreation with **useCallback**, there is still one more optimization left.

Sometimes the problem is neither the component nor the function.

Sometimes the real problem is an **expensive calculation**.

Even if the calculation never changes, React executes it every time the component renders.

To avoid this unnecessary work, React provides the **`useMemo`** Hook.

Unlike `useCallback`, which remembers a function, **`useMemo` remembers the value returned by a calculation**.

In the next section, we'll understand `useMemo` using your own `sum` example.


---

# ⚡ useMemo

## What is useMemo?

`useMemo` is a React Hook that memoizes a **calculated value**. Instead of performing the same calculation on every render, React stores the result in memory and returns the cached value until one of its dependencies changes.

In simple words,

> **useMemo remembers the result of a calculation, not the function itself.**

This Hook is mainly used when a calculation is expensive and doesn't need to run on every render.

---

# 🤔 Why Do We Need useMemo?

Let's understand the problem first.

```jsx
const sum = () => {

  let total = 0;

  console.log("Calculation Running");

  for (let i = 0; i < 1000; i++) {
    total += i;
  }

  return total;

};

<h1>Sum is :- {sum()}</h1>
```

At first, this code looks perfectly fine.

We created a function that calculates the total and simply called it inside JSX.

However, there is one hidden problem.

Every time the **App** component renders, the `sum()` function also runs again.

It doesn't matter whether the calculation is related to the updated state or not.

React executes it because the component itself rendered again.

---

## ⚙️ Rendering Flow

```text
Increase Button
      │
      ▼
Count Updated
      │
      ▼
App Rendering
      │
      ▼
sum() Executed
      │
      ▼
Calculation Running ❌
```

Now click **Change Name**.

```text
Change Name
      │
      ▼
User Updated
      │
      ▼
App Rendering
      │
      ▼
sum() Executed
      │
      ▼
Calculation Running ❌
```

Notice that both buttons execute the same calculation even though neither of them changes the calculation logic.

This is called **Unnecessary Calculation**.

---

# 🚀 Solving the Problem with useMemo

React provides the **useMemo** Hook to cache calculated values.

Instead of recalculating everything on every render, React stores the returned value and reuses it until one of its dependencies changes.

Let's update the previous code.

```jsx
const sum = useMemo(() => {

  let total = 0;

  console.log("Calculation Running");

  for (let i = 0; i < 1000; i++) {
    total += i;
  }

  return total;

}, []);
```

Now display the value.

```jsx
<h1>Sum is :- {sum}</h1>
```

The calculation now runs only once.

Every future render simply returns the stored value.

---

# 🧐 Code Explanation

### `useMemo()`

```jsx
useMemo(() => {

}, []);
```

The `useMemo` Hook stores the value returned by a function.

Instead of executing the calculation on every render, React remembers the previous result.

---

### Callback Function

```jsx
() => {

}
```

This callback contains the expensive calculation.

React executes this function only when one of its dependencies changes.

---

### Heavy Calculation

```jsx
let total = 0;

for (let i = 0; i < 1000; i++) {

  total += i;

}
```

This loop represents an expensive calculation.

In real projects, this could be:

- Filtering Products
- Sorting Large Arrays
- Searching Thousands of Records
- Complex Mathematical Calculations
- Processing API Data

---

### `return total`

```jsx
return total;
```

The returned value is stored by React.

Future renders reuse this value instead of calculating it again.

---

### Dependency Array

```jsx
[]
```

The dependency array tells React **when the calculation should run again**.

Since the array is empty,

the calculation runs only once.

---

# 🔍 Your Complete Example

```jsx
const sum = useMemo(() => {

  let total = 0;

  console.log("Calculation Running");

  for (let i = 0; i < 1000; i++) {
    total += i;
  }

  return total;

}, []);

<h1>Sum is :- {sum}</h1>
```

Now open the browser console.

When the application loads, you'll see

```text
App Rendering...

Calculation Running...
```

Click the **Increase** button.

```text
App Rendering...
```

Click the **Change Name** button.

```text
App Rendering...
```

Notice that

```text
Calculation Running...
```

doesn't appear again because React is returning the cached value.

---

# 📌 What If Dependencies Change?

Let's make the calculation depend on `count`.

```jsx
const sum = useMemo(() => {

  return count * 100;

}, [count]);
```

Now React watches the `count` dependency.

Whenever `count` changes,

React performs the calculation again.

```text
Count Updated
      │
      ▼
Dependency Changed
      │
      ▼
Calculation Runs Again
      │
      ▼
New Value Stored
```

If `count` doesn't change,

React simply returns the previously stored value.

---

# 📊 React.memo vs useCallback vs useMemo

| React.memo | useCallback | useMemo |
|------------|------------|----------|
| Memoizes a Component | Memoizes a Function | Memoizes a Value |
| Prevents Component Re-render | Prevents Function Recreation | Prevents Heavy Calculations |
| Works with Props | Works with Functions | Works with Calculated Values |
| Used with Child Components | Used while Passing Functions | Used for Expensive Calculations |

---

# 🎯 When Should You Use Them?

### ✅ Use React.memo

- Child component renders unnecessarily.
- Component receives the same props repeatedly.
- You want to skip unnecessary rendering.

---

### ✅ Use useCallback

- Passing a function to a child component.
- Child component uses `React.memo`.
- Function recreation is causing unnecessary rendering.

---

### ✅ Use useMemo

- Heavy calculations.
- Large array filtering.
- Sorting data.
- Expensive computations.
- Processing API responses.

---

# 📝 Final Summary

React provides three powerful optimization techniques, and each one solves a different problem.

**`React.memo`** prevents unnecessary component rendering by comparing props.

**`useCallback`** prevents unnecessary function recreation by keeping the same function reference.

**`useMemo`** prevents unnecessary calculations by caching the returned value.

Always remember that these Hooks are **performance optimization tools**, not something that should be used in every component. Use them only when you actually face unnecessary rendering or expensive calculations.

---

# 🚀 Complete Flow

```text
State Updated
      │
      ▼
App Rendering
      │
      ├────────────► React.memo
      │                 │
      │                 ▼
      │         Skip Child Rendering
      │
      ├────────────► useCallback
      │                 │
      │                 ▼
      │      Same Function Reference
      │
      └────────────► useMemo
                        │
                        ▼
             Return Cached Value
```

---

## 🧠 Easy Way to Remember

```text
React.memo
      ↓
Remember Component

────────────────────────

useCallback
      ↓
Remember Function

────────────────────────

useMemo
      ↓
Remember Value
```

> ⭐ Rule of Thumb:
>
> - **React.memo → Component**
> - **useCallback → Function**
> - **useMemo → Value**
>
> If there is no performance issue, you usually don't need to use them.