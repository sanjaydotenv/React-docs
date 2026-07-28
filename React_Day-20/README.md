# 🚀 React Performance Optimization

## 📖 Introduction

Modern web applications should not only work correctly but also perform efficiently. As applications grow in size, they may suffer from unnecessary function executions, excessive rendering, large JavaScript bundles, and slower loading times.

To solve these problems, developers use several performance optimization techniques.

In this guide, we will understand three important concepts:

- ⚡ Debouncing
- 🚀 Throttling
- 📦 Code Splitting

Each concept solves a different performance problem and helps create faster, smoother, and more optimized applications.

---

# ⚡ Debouncing

## What is Debouncing?

Debouncing is a technique that delays the execution of a function until the user stops performing an action for a specified amount of time.

Instead of executing a function on every event, the timer keeps resetting whenever a new event occurs. The function finally executes only after the user becomes inactive.

---

## 🧠 Real World Example

Imagine you're searching for a laptop.

You type:

```
L
La
Lap
Lapt
Lapto
Laptop
```

Without Debouncing

```
Search()
Search()
Search()
Search()
Search()
Search()
```

Six searches are executed.

With Debouncing

```
User keeps typing

↓

Timer resets every time

↓

User stops typing

↓

Search() executes only once
```

Only one request is sent.

---

## How Debouncing Works

```
User Types

↓

Start Timer

↓

User Types Again?

YES
│
▼

Clear Previous Timer

↓

Start New Timer

↓

User Stops Typing

↓

Execute Function
```

---

## React Example

```javascript
useEffect(() => {
    if (!searchData) return;

    const timeout = setTimeout(() => {
        filterData();
    },700);

    return () => {
        clearTimeout(timeout);
    };

},[searchData]);
```

---

## Where is Debouncing Used?

- Search Bars
- Live Search
- Auto Suggestions
- Form Validation
- API Requests
- Filtering Data

---

## Advantages

- Reduces API Calls
- Improves Performance
- Reduces Re-rendering
- Better User Experience
- Saves Server Resources

---

# 🚀 Throttling

## What is Throttling?

Throttling is a technique that limits how often a function can execute.

Instead of executing continuously, the function executes once and then waits for a fixed amount of time before it can execute again.

---

## 🧠 Real World Example

Imagine you're scrolling a webpage.

Without Throttling

```
Scroll

↓

Function()

↓

Function()

↓

Function()

↓

Function()

↓

Function()
```

Hundreds of executions happen every second.

With Throttling

```
Scroll

↓

Function Executes

↓

Ignore Remaining Events

↓

Wait 3 Seconds

↓

Function Executes Again
```

---

## How Throttling Works

```
User Scrolls

↓

Function Executes

↓

Lock Function

↓

Ignore Events

↓

Time Finished

↓

Unlock Function

↓

Execute Again
```

---

## React Example

```javascript
let throttle = false;

useEffect(() => {

    const handleScroll = () => {

        if(throttle) return;

        throttle = true;

        console.log("Scroll Triggered");

        setTimeout(() => {
            throttle = false;
        },3000);

    };

    window.addEventListener("scroll",handleScroll);

    return () => {
        window.removeEventListener("scroll",handleScroll);
    };

},[]);
```

---

## Where is Throttling Used?

- Infinite Scroll
- Mouse Move
- Window Resize
- Scroll Events
- Lazy Loading
- Drag & Drop

---

## Advantages

- Prevents Excessive Event Calls
- Improves Browser Performance
- Smooth Scrolling
- Reduces Rendering
- Optimizes Heavy Operations

---

# 📦 Code Splitting

## What is Code Splitting?

Code Splitting is a performance optimization technique where a large JavaScript bundle is divided into smaller bundles (chunks).

Instead of downloading the entire application on the first page load, only the code required for the current page is loaded.

The remaining code is downloaded only when needed.

---

## Why Do We Need Code Splitting?

Imagine an application with multiple pages.

```
Home
About
Contact
Dashboard
Cart
Checkout
Profile
Admin
Settings
```

Without Code Splitting

```
User Opens Home

↓

Download Entire App

↓

Home
About
Dashboard
Cart
Checkout
Profile
Admin
Settings
```

Even though the user only visits the Home page, every page's JavaScript is downloaded.

This increases:

- Initial Loading Time
- Bundle Size
- Memory Usage

---

With Code Splitting

```
User Opens Home

↓

Download Only Home Bundle

↓

User Opens Cart

↓

Download Cart Bundle

↓

User Opens Dashboard

↓

Download Dashboard Bundle
```

Only the required code is downloaded.

---

## How Code Splitting Works

```
Large Bundle

↓

Split Into Chunks

↓

Home Chunk

About Chunk

Cart Chunk

Dashboard Chunk

Profile Chunk

↓

Load Only Required Chunk
```

---

## React Code Splitting

React provides two built-in features:

- React.lazy()
- Suspense

---

### Example

```javascript
import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./About"));

function App() {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <About />
        </Suspense>
    );
}

export default App;
```

---

## How It Works

```
App Starts

↓

User Opens Home

↓

Home Loads

↓

User Clicks About

↓

React Downloads About Component

↓

About Page Renders
```

The About component is downloaded only when required.

---

## Where is Code Splitting Used?

- Route-based Loading
- Dashboard Pages
- Admin Panels
- Large Applications
- Heavy Components
- Charts
- Maps
- Rich Text Editors

---

## Advantages

- Smaller Initial Bundle
- Faster First Load
- Better Performance
- Lower Memory Usage
- Improved User Experience
- Faster Page Navigation

---

# 📊 Debouncing vs Throttling vs Code Splitting

| Feature | Debouncing | Throttling | Code Splitting |
|---------|------------|------------|----------------|
| Purpose | Delay execution until user stops an action | Limit execution frequency | Reduce JavaScript bundle size |
| Best Used For | Search, Input, Validation | Scroll, Resize, Mouse Move | Large React Applications |
| Solves | Too many function calls | Continuous event execution | Large bundle loading |
| Benefit | Fewer API requests | Better event performance | Faster application loading |

---

# 🎯 Conclusion

Although Debouncing, Throttling, and Code Splitting are different techniques, they all aim to improve application performance.

- **Debouncing** reduces unnecessary function executions by waiting until the user stops interacting.
- **Throttling** limits how frequently a function can run during continuous events.
- **Code Splitting** reduces the initial JavaScript bundle size by loading code only when it is needed.

Understanding these three concepts is essential for building fast, scalable, and user-friendly React applications.