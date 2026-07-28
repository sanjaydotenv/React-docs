import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContextAPI } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const AuthHook = () => {
  const navigate = useNavigate();
  const { registerUsers, setRegisterUsers, setCurrentUser, currentUser } =
    useContext(AuthContextAPI);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginFormSubmit = (data) => {
    const user = registerUsers.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (!user) {
      toast.error("Invalid Credentials, User Not Found");
      return;
    }

    setCurrentUser({ name: user.name, email: user.email });
    toast.success("Logged in successfully");
    navigate("/mainlayout");
  };

  const registerFormSubmit = (data) => {
    const isUserExists = registerUsers.find(
      (user) => user.email === data.email,
    );

    if (isUserExists) {
      toast.warning("Account already exists.");
      return;
    }

    if (data.password !== data.confirmPassword) {
      toast.warning("Passwords do not match.");
      return;
    }

    const updatedUsers = [...registerUsers, data];
    setRegisterUsers(updatedUsers);
    localStorage.setItem("registerUsers", JSON.stringify(updatedUsers));
    setCurrentUser({ name: data.name, email: data.email });
    toast.success("Registered Successfully");
    reset();
    navigate("/mainlayout");
  };

  return {
    navigate,
    registerUsers,
    setRegisterUsers,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
    currentUser,
  };
};
