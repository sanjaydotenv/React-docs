# ⚛️ JSX and Components in React

## What are Components?

Components are JavaScript functions that return React elements.

We use components to divide the UI into small and reusable pieces. Instead of writing everything in one file, we create different components and use them wherever we need them.

Example:

```jsx
export default function App() {
  return <div>Hello React</div>;
}
```

We can use a component like this:

```jsx
import App from "./App";

function Root() {
  return <App />;
}
```

Components make our code cleaner, easier to manage, and reusable. They are like LEGO blocks because we can build a complete application by combining many small components.

---

# What is JSX?

JSX stands for **JavaScript XML**.

JSX is **not HTML**. It is a syntax extension for JavaScript that looks similar to HTML.

JSX makes React code easier to read and write.

Without JSX, we would write:

```jsx
React.createElement("h1", null, "Hi, This is h1");
```

With JSX, we can simply write:

```jsx
<h1>Hi, This is h1</h1>
```

Both examples create the same React element, but JSX is much easier to understand.

---

# How JSX Works

The browser **cannot understand JSX**.

Before the code runs in the browser, JSX is transformed into JavaScript.

For example, when we write:

```jsx
<span>I am a span</span>
```

it is transformed into code similar to:

```jsx
React.createElement("span", null, "I am a span");
```


---

# Who Converts JSX?

Many beginners think **Babel always converts JSX**, but that is not always true.

The tool that converts JSX depends on the project setup.

For example:

* A React project using **Create React App** usually uses **Babel**.
* A React project using **Vite** uses a fast compiler (such as **esbuild** during development) and other build tools to transform JSX.
* Some modern projects may also use **SWC** or **OXC** instead of Babel.

The important thing is that **JSX must be transformed into JavaScript before the browser can execute it.**

---

# What Does Vite Do?

Vite is a **build tool**.

It does not convert JSX by itself. Instead, it manages the development process and uses different tools to transform and optimize the code.

Vite provides:

* A fast development server
* Hot Module Replacement (HMR)
* Fast JSX transformation
* Production build and optimization

During development, Vite transforms your code very quickly. During production, it creates an optimized build for the browser.

---
# ⚛️ React Reconciliation

## What is Reconciliation?

Reconciliation is the process React uses to update the user interface (UI).

Whenever the **state** or **props** of a component change, React renders the component again.

During this process, React does **not** recreate the whole webpage.

Instead, it compares the previous React element tree with the new React element tree and finds what has changed.

This process is called **Reconciliation**.

---

# Example

Before update:

```jsx
<h1>Hello</h1>
```

After update:

```jsx
<h1>Hello World</h1>
```

React creates a new React element tree and compares it with the previous one.

Since only the text has changed, React updates only the text inside the `<h1>` element instead of replacing the entire element.

---

# Reconciliation Phases

React performs Reconciliation in two phases.

## 1. Render Phase

During the Render Phase, React:

* Creates a new React element tree.
* Compares the old tree with the new tree.
* Finds the differences between them.

This comparison process is called **Diffing**.

After the comparison, React knows exactly what needs to be updated.

No changes are made to the Real DOM during this phase.

---

## 2. Commit Phase

In the Commit Phase, React applies all the required changes to the Real DOM.

Only the changed elements are updated.

This makes React faster because it avoids updating the entire page.

---

# Why React Fiber?

Before React Fiber, React processed all updates in one long task.

If a large update took a long time, the browser had to wait until React finished its work.

This could make the application feel slow and less responsive.

React Fiber was introduced in **React 16 (2017)** to solve this problem.

Fiber breaks rendering work into small units.

It can pause, continue, or prioritize work when needed.

This allows React to keep the application more responsive while processing updates.

---

State / Props Change
        │
        ▼
Component Re-renders
        │
        ▼
New React Element Tree
        │
        ▼
Render Phase
(Diffing)
        │
        ▼
Changes Found
        │
        ▼
Commit Phase
        │
        ▼
Real DOM Updated


---


# Summary

* Components are reusable JavaScript functions that return React elements.
* JSX stands for JavaScript XML.
* JSX is a JavaScript syntax, not HTML.
* JSX makes React code easier to read and write.
* The browser cannot understand JSX directly.
* JSX is transformed into JavaScript before it runs.
* Babel is one tool that can transform JSX, but modern React projects may use esbuild, SWC, or OXC depending on the setup.
* Vite is a build tool that manages the development and build process.
* Reconciliation is the process React uses to update the UI.
* React creates a new React element tree after every update.
* React compares the old tree with the new tree.
* This comparison is called Diffing.
* The Render Phase calculates what needs to change.
* The Commit Phase updates the Real DOM.
* React Fiber makes rendering more flexible by splitting work into small units and prioritizing important updates.
