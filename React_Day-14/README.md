# 🛣️ React Router

In this project, I learned the basics of **React Router** and how to navigate between different pages in a React application.

React Router allows us to build **Single Page Applications (SPA)** where users can move from one page to another **without refreshing the browser**. This makes the application faster and provides a smooth user experience.

---

## 📚 What I Learned

* 📦 Installing and setting up React Router
* 🌐 Wrapping the app with `BrowserRouter`
* 🛤️ Creating routes using `Routes` and `Route`
* 🔗 Navigating between pages using `NavLink`
* 📂 Organizing the project with multiple page components
* ⚡ Understanding Client-Side Routing
* 🎨 Highlighting the active navigation link

---

## 🛠️ Components Used

| Component       | Purpose                                                            |
| --------------- | ------------------------------------------------------------------ |
| `BrowserRouter` | Enables routing in the application                                 |
| `Routes`        | Holds all the application routes                                   |
| `Route`         | Maps a URL to a React component                                    |
| `NavLink`       | Navigates between pages and automatically detects the active route |

---

## 🔗 Link vs NavLink

| `Link`                             | `NavLink`                                            |
| ---------------------------------- | ---------------------------------------------------- |
| Used for normal navigation         | Used for navigation with active route support        |
| Does not know which page is active | Automatically knows the active page                  |
| No active styling                  | Supports active styling using `className` or `style` |
| Best for simple links              | Best for navigation bars and menus                   |

### Example

```jsx
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "text-blue-500 font-bold" : ""
  }
>
  About
</NavLink>
```

When the **About** page is active, React Router automatically applies the active class.

---

## ✨ Why React Router?

* ⚡ Fast navigation
* 🔄 No page reload
* 📱 Better user experience
* 📂 Clean project structure
* 🎯 Easy to manage multiple pages
* 🎨 Active navigation with `NavLink`
