# 📘 React - State and Data Rendering

## 📚 Topics Covered

- What is State?
- useState Hook
- Data Rendering
- Components
- Rendering Multiple Components using Data

---

## 📖 What is State?

State is used to store data inside a React component.

React provides a Hook called **useState** that allows us to store and update data. Whenever the state changes, React automatically re-renders the component and updates the UI.

---

## ⚛️ useState Hook

The `useState` hook is used to create state inside a functional component.

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

### Example

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

---

## 📦 Data Rendering

We can store any type of data inside state.

For example:

```jsx
const [name, setName] = useState("Mayur");
```

Now we can render it inside JSX.

```jsx
<h1>{name}</h1>
```

If the value changes using `setName()`, React automatically updates the UI.

---

## 🧩 Rendering Components Using Data

Instead of creating the same component multiple times, we can store data inside an array and render components dynamically.

### Example

```jsx
const products = [
  {
    id: 1,
    name: "iPhone"
  },
  {
    id: 2,
    name: "Laptop"
  }
];
```

Render using `map()`.

```jsx
{
  products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ));
}
```

---

## 🎯 Benefits

- UI updates automatically.
- No need to manually update the DOM.
- Easy to manage dynamic data.
- Reusable components.
- Clean and readable code.
