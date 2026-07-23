import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../components/context/AuthProvider";
import { toast } from "react-toastify";

export const useAuthHook = () => {
  const {
    setRegisterUsers,
    registerUsers,
    setLoggedInUser,
    loggedInUser,
    productsData,
    setProductsData,
    usersData,
    setUsersData,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const RegisterFormSubmit = (data) => {
    let obj = [...registerUsers, data];
    console.log(obj);
    setRegisterUsers(obj);
    localStorage.setItem("registerUsers", JSON.stringify(obj));
    toast.success("Registered Successfully");
    navigate("/main");
  };

  const LoginFormSubmit = (data) => {
    const isRegisteredUser = registerUsers.find(
      (user) => data.email == user.email && data.password == user.password,
    );

    if (!isRegisteredUser) {
      alert("use not found");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(isRegisteredUser));
    setLoggedInUser(isRegisteredUser);
    toast.success("Logged is Successfully");
    navigate("/main");
  };

  const LogoutHandler = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    toast.warn("Logout Successfully");
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    RegisterFormSubmit,
    LoginFormSubmit,
    loggedInUser,
    productsData,
    setProductsData,
    usersData,
    setUsersData,
    LogoutHandler,
  };
};
