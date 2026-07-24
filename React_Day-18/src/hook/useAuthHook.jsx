import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContextAPI } from "../context/AuthContext";
import { useForm } from "react-hook-form";

export const AuthHook = () => {
  const navigate = useNavigate();
  const { resgiterUsers, setRegisterUsers } = useContext(AuthContextAPI);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginFormSubmit = (data) => {
    console.log(data);
  };

  const registerFormSubmit = (data) => {
    console.log(data);
  };

  return {
    navigate,
    resgiterUsers,
    setRegisterUsers,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit
  };
};
