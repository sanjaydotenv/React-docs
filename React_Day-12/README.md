# React `useEffect` Hook

`useEffect` is a React Hook that is used to handle **Side Effects** in a React component.

Normally, React's job is only to **render the UI**. But sometimes we need to perform tasks that are **not directly related to rendering**, such as fetching data, calling an API, setting an interval, updating the document title, or adding event listeners. These tasks are called **Side Effects**.

`useEffect` allows us to tell React **when** these side effects should run.

---

# What is a Side Effect?

A **Side Effect** is any operation that happens **outside of rendering the UI**.

Examples:

- Fetch Data from an API
- Set `setInterval()` or `setTimeout()`
- Add or Remove Event Listeners
- Access Local Storage
- Update the Browser Title
- Make API Calls
- Connect to WebSocket

These operations should not be written directly inside the component because the component function runs every time it re-renders.

That's why React provides the `useEffect` Hook.

---

# Syntax

```jsx
useEffect(() => {
  // Side Effect Code
}, dependencies);
```

- **First Argument** → Callback function (Side Effect)
- **Second Argument** → Dependency Array (Controls when the effect runs)

---

# How `useEffect` Works

The component renders first.

After React updates the UI on the screen, `useEffect` runs.

**Flow:**

```
Render Component
      ↓
UI Updated
      ↓
useEffect Executes
```

---

# Dependency Array

The **Dependency Array** decides **when the effect should run**.

There are **3 possible cases**.

---

## 1. No Dependency Array

```jsx
useEffect(() => {
  console.log("Effect");
});
```

### Output

```
Render
Effect

Render
Effect

Render
Effect
```

Whenever the component re-renders, the effect runs again.

If a state changes 10 times, the effect will also run 10 times.

Use this only when you really need the effect after every render.

---

## 2. Empty Dependency Array (`[]`)

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

### Output

```
Render
Component Mounted
```

The effect runs **only once** after the first render (Component Mount).

Even if the component re-renders because of state updates, this effect will **not** run again.

Common use cases:

- API Call
- Initial Data Fetch
- Initial Setup
- Event Listener Registration

---

## 3. Dependency Array with Values

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count Changed");
}, [count]);
```

Now the effect depends on `count`.

Whenever `count` changes, the effect runs again.

### Example

```jsx
count = 0
```

```
Render
Effect
```

Click Button

```jsx
count = 1
```

```
Render
Effect
```

Click Again

```jsx
count = 2
```

```
Render
Effect
```

If another state changes instead of `count`, this effect **will not run**.

Example:

```jsx
const [count, setCount] = useState(0);
const [name, setName] = useState("");
```

```jsx
useEffect(() => {
  console.log("Count Changed");
}, [count]);
```

Updating `name` ❌

```
Render
(No Effect)
```

Updating `count` ✅

```
Render
Effect
```

---

# Multiple Dependencies

You can watch multiple values.

```jsx
useEffect(() => {
  console.log("Effect");
}, [count, name]);
```

Now the effect runs whenever:

- `count` changes
- `name` changes

---

# Cleanup Function

Sometimes we create resources like:

- Interval
- Timer
- Event Listener
- WebSocket Connection

These should be removed when the component is removed, otherwise they can cause memory leaks.

For that, `useEffect` can return a **Cleanup Function**.

```jsx
useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmount");
  };
}, []);
```

The cleanup function runs:

- Before the component unmounts.
- Before the effect runs again (if dependencies change).

Example:

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
```

Without cleanup, the interval would continue running even after the component is removed.

---

# Execution Order

```jsx
function App() {
  console.log("Render");

  useEffect(() => {
    console.log("Effect");
  });

  return <h1>Hello</h1>;
}
```

### Output

```
Render
Effect
```

React first renders the component, then runs the effect.

---

# Important Points

- `useEffect` is used for **Side Effects**.
- It always runs **after the component renders**.
- The **Dependency Array** controls when the effect runs.
- No dependency array → Runs after every render.
- Empty array (`[]`) → Runs only once after the first render.
- Dependency values (`[count]`) → Runs whenever those values change.
- Cleanup functions prevent memory leaks by removing intervals, event listeners, or other resources.

---

# Quick Revision

| Dependency Array | Runs When |
|------------------|-----------|
| No Array | After every render |
| `[]` | Only once after the first render |
| `[count]` | Whenever `count` changes |
| `[count, name]` | Whenever `count` or `name` changes |

---

## Easy Way to Remember

```
No Dependency Array
↓
Every Render

[]

↓
Only First Render (Mount)

[count]

↓
Whenever count changes

[count, name]

↓
Whenever count or name changes
```