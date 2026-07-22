import react, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { loggedInUser, setLoggedInUser, registeredUsers } = useContext(Auth);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const isUserRegister = registeredUsers.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (!isUserRegister) {
      toast.error("User not found Invalid credentials");
      reset();
      return;
    }

    setLoggedInUser(data);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    reset();
    toast.success("User Logged In Successfully");
    navigate("/mainlayout/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-5">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800">Login</h1>

        <p className="text-center text-slate-500 mt-2 mb-8">
          Welcome back! Please login to your account.
        </p>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 font-semibold">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 font-semibold">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Login
          </button>
        </form>
        <p className="text-center text-slate-600 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
