# 📦 React Data Rendering & State Lifting

How to **render dynamic data** and **lift state** in React.

- **Data Rendering:** Instead of writing UI manually, I stored data inside an array and used the **`map()`** method to render multiple components dynamically.

  **Example:**
  ```jsx
  users.map((user) => (
    <UserCard user={user} />
  ));
  ```

- **State Lifting:** I passed data from a **child component** to its **parent component** by lifting the state up. This allows the parent component to manage the data and share it with other child components when needed.

  **Example:**
  ```jsx
  // Child Component
  <Form onSubmit={handleAddUser} />

  // Parent Component
  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };
  ```

