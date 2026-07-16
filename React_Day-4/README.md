# React `useState` Hook

`useState` is a React Hook that is used to manage state in a functional component.

A **state** is simply a piece of data that can change over time. For example:

- Counter value
- User name
- Theme (Dark / Light)
- Login status

Whenever the state changes, React automatically updates the UI.

---

## Syntax

```jsx
const [state, setState] = useState(initialValue);
```

It returns two values:

- `state` → Current state value.
- `setState` → Function used to update the state.

---

## Example

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```


### Explanation

- `count` stores the current value.
- `setCount()` updates the value.
- When the state changes, React re-renders the component and updates the UI.

---

## React Optimization

If you update the state with the **same value**, React skips the re-render because nothing has changed.

```jsx
setCount(0); // Current value is already 0
```

This optimization is called **Bail Out**.

---

## Batching

React combines multiple state updates into a single render.

```jsx
setName("Mayur");
setAge(20);
setTheme("Dark");
```

Instead of rendering three times, React renders only once. This is called **Batching**, and it makes React faster.

---

## Key Points

- `useState` is used to manage state.
- State is data that can change over time.
- It returns the current state and a function to update it.
- Updating the state re-renders the component.
- React skips re-rendering if the value doesn't change (Bail Out).
- React batches multiple state updates into a single render for better performance.