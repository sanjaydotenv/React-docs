# React Hook Form Validation

React Hook Form provides many built-in validation rules, so you don't need to write validation logic manually.

## Common Validation Rules

- `required`
- `minLength`
- `maxLength`
- `pattern`
- `min`
- `max`
- `validate`

The `errors` object inside `formState` stores all validation errors.

---

## Example

```jsx
const Form = ({ setUserData, setToggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  return (
    <input
      {...register("name", {
        minLength: {
          value: 4,
          message: "Name must be at least 4 characters.",
        },
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: "Only letters are allowed.",
        },
      })}
      type="text"
      placeholder="Name"
    />
  );
};
```

---

## How It Works

- Add validation rules inside the `register()` function.
- If a validation rule fails, React Hook Form automatically creates an error.
- All validation errors are available inside the `errors` object.
- You can display custom error messages using `errors.fieldName.message`.

---

## Benefits

- ✅ No need to write manual validation logic.
- ✅ Less boilerplate code.
- ✅ Better performance.
- ✅ Easy to manage forms.
- ✅ Custom error messages for each validation rule.