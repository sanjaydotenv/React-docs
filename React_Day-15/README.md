# 🛍️ React Mini E-Commerce

This is a simple **React E-Commerce** project where product data is fetched from the **Fake Store API**. The project is built to practice **React Router**, **Dynamic Routing**, **API Integration**, and **Responsive UI** using Tailwind CSS.

## 🚀 Features

* Fetch products from Fake Store API
* Responsive Product Cards
* React Router Navigation
* Dynamic Routing
* Product Details Page
* Clean UI with Tailwind CSS
* Responsive Design
* Reusable Components

---

# 🛠️ Technologies Used

* React
* React Router
* Axios
* Tailwind CSS
* Fake Store API

---

# 🌐 Dynamic Routing

The main concept used in this project is **Dynamic Routing**.

Normally, we create a separate route for every page.

Example:

```jsx
/home
/about
/contact
```

But when we have hundreds of products, creating a route for every product is not a good idea.

Instead, React Router allows us to create **one dynamic route**.

```jsx
<Route path="/cart/:id" element={<Cart />} />
```

Here,

* `:id` is called a **Route Parameter**.
* It works like a placeholder.
* It changes automatically according to the selected product.

For example:

```text
/cart/1
/cart/2
/cart/10
/cart/20
```

Only the value after `/cart/` changes.

Inside the component we can access this value using the **useParams()** hook.

```jsx
const { id } = useParams();
```

Now the value of `id` becomes:

* `1`
* `2`
* `10`
* `20`

depending on which product the user opens.

Using this ID, we can display the correct product details without creating multiple pages.

This makes the application **clean, scalable, and easy to maintain**.

---

# 🎯 Future Improvements

* Add to Cart
* Quantity Management
* Search Products
* Category Filter
* Wishlist
* Checkout Page
* Authentication
* Context API / Redux

---

## ⭐ Conclusion

This project helped me understand how **React Router** and **Dynamic Routing** work in real-world applications. I also improved my skills in **API fetching**, **responsive UI design**, and **building reusable React components**.
