# ⚛️ React and Vite

## What is React?

React is a JavaScript library.

It helps us build the frontend (user interface) of a website. React also uses JavaScript to show content in the DOM, but it works in a different and easier way than plain JavaScript.

React makes the development process faster because we can reuse components and write cleaner code.

We can use React in different ways, such as:

* Using a CDN
* Installing it with npm

But if we do everything manually, it takes more time because we need to install packages, create the project structure, and configure the environment ourselves.

---

## What is Vite?

Vite is a build tool that helps us create and run React projects quickly.

Instead of setting up everything manually, Vite creates a ready-to-use React project for us.

We only need to run:

```bash
npm create vite@latest
```

After creating the project, we install the required packages:

```bash
npm install
```

Then we start the development server:

```bash
npm run dev
```

Now our React project is ready.

Behind the scenes, Vite prepares our code for the browser. During development, it serves the code very fast using ES Modules. When we build the project for production, Vite bundles and optimizes the code so the browser can run it efficiently.

---

# Summary

* React is a JavaScript library for building user interfaces.
* React makes frontend development easier and faster.
* We can use React with a CDN or by installing it with npm.
* Vite helps us create and run React projects quickly.
* Vite reduces manual setup and provides a fast development experience.
* During production, Vite bundles and optimizes the code for the browser.
