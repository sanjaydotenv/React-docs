# ⚛️ React Router - Data Routing & Protected Routes

## 📌 Introduction

React Router provides **two approaches** to define routes in a React application:

* **Declarative Routing**
* **Data Routing**

Declarative Routing uses components like **BrowserRouter**, **Routes**, and **Route** to create routes.

Data Routing is the modern approach introduced in React Router. It provides a more structured way to manage routes and supports advanced features like **Loaders**, **Actions**, **Error Boundaries**, and **Protected Routes**.

---

# 📂 What is Data Routing?

Data Routing is a routing approach where all routes are defined using **createBrowserRouter()**.

Instead of writing multiple `<Route>` components, routes are created as JavaScript objects inside an array.

This makes the routing structure cleaner, easier to maintain, and more scalable for medium and large applications.

---

# 🏗️ createBrowserRouter()

`createBrowserRouter()` is used to create the application's routing configuration.

Each route is represented as an object with properties such as:

* `path` → URL path
* `element` → Component to render
* `children` → Nested routes

Example:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
```

---

# 🚀 RouterProvider

After creating the router, it must be connected to the React application using **RouterProvider**.

```jsx
<RouterProvider router={router} />
```

`RouterProvider` makes the router available to the entire application.

---

# 📁 Nested Routing

Nested Routing allows one route to contain other routes.

Child routes are created using the **children** property.

```jsx
{
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {
      path: "profile",
      element: <Profile />,
    },
  ],
}
```

To display child routes, the parent component must contain an **Outlet** component.

```jsx
<Outlet />
```

The child component is rendered exactly where the `Outlet` is placed.

---

# 📦 Outlet

`Outlet` is a placeholder for nested routes.

Whenever a child route matches the URL, React Router renders that child component inside the `Outlet`.

Without `Outlet`, nested routes will not be displayed.

---

# 🔒 Protected Routes

Protected Routes are used to restrict access to specific pages.

Only authenticated users can access these routes. If the user is not authenticated, they are redirected to another page, usually the Login page.

Example:

```jsx
const MainLayout = () => {
  const { loggedInUser } = useContext(Auth);

  if (!loggedInUser) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
```

This pattern is commonly used in dashboards, admin panels, and user profile pages.

---

# 📤 Navigate

`Navigate` is used to redirect users from one route to another.

It is commonly used after login, logout, or authentication checks.

```jsx
return <Navigate to="/" />;
```

---

# 📂 Route Structure

A simple Data Routing structure looks like this:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
```

Keeping all routes in one place makes the project easier to understand and maintain.

---

# ✨ Benefits of Data Routing

* Clean and organized route structure.
* All routes are managed in one place.
* Easy to create nested routes.
* Easy to implement protected routes.
* Supports Loaders and Actions for data handling.
* Supports Error Boundaries for route-level error handling.
* Better for medium and large React applications.

---

# 🔄 Declarative Routing vs Data Routing

| Declarative Routing                       | Data Routing                                          |
| ----------------------------------------- | ----------------------------------------------------- |
| Uses BrowserRouter                        | Uses createBrowserRouter                              |
| Routes are written using Route components | Routes are written as JavaScript objects              |
| Better for small applications             | Better for medium and large applications              |
| Basic routing                             | Supports routing with data APIs and advanced features |

---

# 📚 Key Points

* React Router provides two approaches for defining routes.
* Data Routing uses `createBrowserRouter()`.
* `RouterProvider` connects the router with the application.
* `children` is used to create nested routes.
* `Outlet` renders child routes.
* `Navigate` redirects users to another route.
* Protected Routes help secure private pages.
* Data Routing is the recommended approach for modern React applications.

---

# 🎯 Conclusion

Data Routing provides a clean, scalable, and organized way to manage routing in React applications. It not only simplifies route management but also supports advanced features such as nested routing, protected routes, loaders, actions, and error boundaries. For modern React projects, Data Routing is the recommended approach because it improves both maintainability and scalability.
