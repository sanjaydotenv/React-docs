# 📌 useRef Hook and React Hook Form

## 🔹 useRef Hook

Normally, when we handle forms using **state**, React re-renders the component whenever the input value changes. Too many re-renders can affect performance in large forms.

To avoid this, React provides the **useRef** hook.

With `useRef`, we can directly access a real DOM element using the `ref` attribute.

### Example

```jsx
import { useRef } from "react";

const inpRef = useRef();

<input ref={inpRef} type="text" placeholder="Product Name" />;
```

Using `useRef`, React returns an **object** with a `current` property.

```jsx
console.log(inpRef);
// { current: ... }
```

- `current` stores the referenced DOM element.
- `useRef` does **not** cause the component to re-render when its value changes.
- You can also store any value inside `current`, not just DOM elements.

---

## 🔹 React Hook Form

**React Hook Form** is a library that makes form handling simple and fast.

It works with **uncontrolled components** and internally uses **refs**, which helps reduce unnecessary re-renders and improves performance.

### Example

```jsx
import { useForm } from "react-hook-form";

const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm();

<form onSubmit={handleSubmit((data) => console.log(data))}>
  <input {...register("firstName")} />
  <input {...register("lastName")} />
  <input {...register("age")} />
  <input type="submit" />
</form>;
```

With just a few lines of code, we can easily collect form data without managing input values using React state.