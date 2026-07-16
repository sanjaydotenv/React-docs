# 📋 React Form Handling

In React, there are multiple ways to handle forms. The three most common approaches are:

1. Brute Force Approach
2. Better Approach
3. Optimized Approach

---

## 1️⃣ Brute Force Approach

In this approach, we create a separate state for every input field.

### Example

```jsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

<input
  onChange={(e) => setName(e.target.value)}
  className="border-2 px-5 py-2"
  type="text"
  placeholder="Name"
/>

<input
  onChange={(e) => setEmail(e.target.value)}
  className="border-2 px-5 py-2"
  type="text"
  placeholder="Email"
/>

<input
  onChange={(e) => setPassword(e.target.value)}
  className="border-2 px-5 py-2"
  type="text"
  placeholder="Password"
/>
```

### ❌ Drawbacks

- We need to create one state for each input.
- A separate `onChange` function is written for every field.
- The same code is repeated multiple times.
- It does **not follow the DRY (Don't Repeat Yourself) principle**.
- The code becomes difficult to manage as the form grows.

---

## 2️⃣ Better Approach

Instead of creating multiple states, we create a single state object and store all input values inside it.

### Example

```jsx
const [formData, setFormData] = useState({});

<input
  onChange={(e) => {
    setFormData({ ...formData, name: e.target.value });
  }}
  className="border-2 px-5 py-2"
  type="text"
  placeholder="Name"
/>

<input
  onChange={(e) => {
    setFormData({ ...formData, email: e.target.value });
  }}
  className="border-2 px-5 py-2"
  type="text"
  placeholder="Email"
/>

<input
  onChange={(e) => {
    setFormData({ ...formData, password: e.target.value });
  }}
  className="border-2 px-5 py-2"
  type="text"
  placeholder="Password"
/>
```

### ✅ Advantages

- Only one state is required.
- All form data is stored in a single object.
- Easier to manage than the brute force approach.

### ❌ Problem

Although we use only one state, we still repeat the same `onChange` logic for every input.

---

## 3️⃣ Optimized Approach (Recommended)

In this approach, we create a single `handleChange()` function that handles all input fields.

Each input has a unique `name` attribute, and we use that name as the object key.

### Example

```jsx
const [formData, setFormData] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};

<input
  name="name"
  onChange={handleChange}
  className="border-2 px-5 py-2"
  type="text"
  placeholder="Name"
/>

<input
  name="email"
  onChange={handleChange}
  className="border-2 px-5 py-2"
  type="text"
  placeholder="Email"
/>

<input
  name="password"
  onChange={handleChange}
  className="border-2 px-5 py-2"
  type="text"
  placeholder="Password"
/>
```

### ✅ Advantages

- Only one state is needed.
- Only one `handleChange()` function handles every input.
- No repeated code.
- Easy to scale when more fields are added.
- Clean, readable, and maintainable code.
- Follows the **DRY (Don't Repeat Yourself) principle**.

---

## 📝 Summary

| Approach | States | Functions | Recommended |
|----------|--------|-----------|-------------|
| Brute Force | Multiple | Multiple | ❌ No |
| Better | One Object State | Multiple | ⚠️ Better |
| Optimized | One Object State | One | ✅ Yes |