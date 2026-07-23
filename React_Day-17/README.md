# 📂 Project Structure

A good folder structure is one of the most important parts of a React application. Instead of keeping everything in one place, this project is divided into different folders based on their responsibility.

This makes the project easy to understand, scalable, and simple to maintain.

---

# 📁 Folder Structure

```bash
src/
│── assets/
│── components/
│── config/
│── hooks/
│── layout/
│── pages/
│── routes/
│── App.jsx
│── main.jsx
│── index.css
```

---

# 🎨 Assets

The **assets** folder is used to store all static files of the project.

Examples:
- Images
- Icons
- Fonts
- SVG Files

Keeping these files in one place makes them easy to manage.

---

# 🧩 Components

The **components** folder contains reusable UI components.

Instead of writing the same UI multiple times, reusable components are created and used wherever needed.

Examples:

- Navbar
- Card
- Button
- Loader

This reduces duplicate code and keeps the project cleaner.

---

# ⚙️ Config

The **config** folder stores project configurations.

In this project, Axios is not called separately inside every component. A single Axios instance is created inside this folder and reused throughout the application.

### Benefits

- One place to manage the Base URL
- Easy to add headers
- Easy to manage interceptors
- Cleaner API calls

---

# 🪝 Hooks

Instead of creating state and API logic inside every component, custom hooks are used.

All reusable logic is placed inside the **hooks** folder.

This keeps components focused only on rendering the UI while the logic stays separate.

### Benefits

- Cleaner components
- Reusable logic
- Better readability
- Easy maintenance

---

# 📄 Pages

The **pages** folder contains all application pages.

Each page represents a separate screen of the application.

Example:

- Home
- Products
- Product Details
- Login

Keeping pages separate makes routing much easier.

---

# 📐 Layout

The **layout** folder contains common layouts shared between multiple pages.

Instead of repeating the same Navbar, Sidebar, or Footer on every page, layouts are created once and reused.

This helps keep the code DRY (Don't Repeat Yourself).

---

# 🛣️ Routes

All routing logic is managed inside the **routes** folder.

This project uses **React Router Data Routing** instead of writing routes directly inside `App.jsx`.

Separating routes into their own folder makes navigation easier to manage as the project grows.

---

# 💡 Architecture Used

While building this project, the main focus was to keep the code clean and organized.

Some practices followed in this project:

- Separate folders for every responsibility.
- Reusable UI components.
- Custom hooks for reusable logic.
- Axios instance for API requests.
- Centralized routing.
- Clean and scalable folder structure.
- Easy to maintain project architecture.

---

# ✅ Why This Structure?

Using this folder structure provides several advantages.

- Better code organization.
- Easy to understand.
- Less code duplication.
- Reusable logic.
- Scalable architecture.
- Easier debugging.
- Faster development for future features.

Following a proper folder structure is considered a best practice for modern React applications.