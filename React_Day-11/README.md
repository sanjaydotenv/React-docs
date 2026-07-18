# React `useContext` Hook

- `useContext` is a React Hook that allows us to share data between components **without passing props manually**.

- Normally, we use **props** to pass data from a parent component to a child component. But when the same data is needed in many components, passing props through multiple levels makes the code complex. This problem is called **Props Drilling**.

- `useContext` solves this problem by allowing us to access shared data from anywhere inside the Provider.

---

## 1. Create Context

First, create a context using `createContext()`.

```jsx
import { createContext, useState } from "react";

// Create Context
export const MyContext = createContext();
```

---

## 2. Create a Provider

Create a Provider component and pass the data using the `value` prop.

```jsx
import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(10);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
};
```

> **Note:** The `value` prop accepts only one JavaScript value. If you want to share multiple values, pass them inside an object.

---

## 3. Wrap Your App

Wrap your application with the Provider.

```jsx
import App from "./App";
import { MyContextProvider } from "./components/context/MyContext";

<MyContextProvider>
  <App />
</MyContextProvider>;
```

---

## 4. Use Context Anywhere

Now you can access the shared data in any component using `useContext()`.

```jsx
import { useContext } from "react";
import { MyContext } from "./context/MyContext";

const { count, setCount } = useContext(MyContext);

console.log(count);
```

---

## ✅ Advantages

- No Props Drilling.
- Share data anywhere in the component tree.
- Cleaner and more readable code.
- Useful for global data like:
  - Theme
  - Authentication
  - Cart
  - User Data
  - Language

---

## 📌 Summary

1. Create a Context using `createContext()`.
2. Create a Provider and pass data through the `value` prop.
3. Wrap your App with the Provider.
4. Access the data anywhere using `useContext()`.