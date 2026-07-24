import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContextAPI } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const AuthHook = () => {
  const navigate = useNavigate();
  const { registerUsers, setRegisterUsers } = useContext(AuthContextAPI);

  console.log(registerUsers);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginFormSubmit = (data) => {
    const isUserExists = registerUsers.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (!isUserExists) {
      toast.error("Invalid Credentials User Not Found");
      return;
    }
    navigate("/mainlayout")
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
      toast.warning("Please confirm your password.");
      return;
    }
    let obj = [...registerUsers, data];
    setRegisterUsers(obj);
    localStorage.setItem("registerUsers", JSON.stringify(obj));
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
  };
};
