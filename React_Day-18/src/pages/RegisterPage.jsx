import React from "react";
import { AuthHook } from "../hook/useAuthHook";

const RegisterPage = () => {
  const { navigate, register, handleSubmit, errors, registerFormSubmit } =
    AuthHook();

  return (
    <div className="min-h-screen w-full bg-[var(--bg-primary)] relative overflow-hidden flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-[-180px] left-[-150px] h-[400px] w-[400px] rounded-full bg-[var(--glow-purple)] blur-[130px]"></div>

      <div className="absolute bottom-[-180px] right-[-150px] h-[350px] w-[350px] rounded-full bg-[var(--glow-blue)] blur-[130px]"></div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(registerFormSubmit)}
        className="
      relative z-10
      w-[430px]
      rounded-[28px]
      border border-[var(--glass-border)]
      bg-[var(--glass-bg)]
      backdrop-blur-xl
      shadow-[var(--shadow-card)]
      px-8
      py-10
      flex
      flex-col
      gap-6
    "
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-[var(--text-primary)]">
            Create Account
          </h1>

          <p className="text-[var(--text-secondary)]">
            Welcome back! Please enter your details.
          </p>
        </div>

        <div className="space-y-5">
          <input
            {...register("name", {
              required: "Name is requred",
            })}
            type="text"
            placeholder="Full Name"
            className="w-full h-14 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-glass)] px-5 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-300 focus:border-[var(--primary)] focus:shadow-[var(--shadow-purple)]"
          />
          {errors.name && <p className="text-[var(--danger)]">{errors.name.message}</p>}

          <input
            {...register("email", {
              required: "Email is requred",
            })}
            type="email"
            placeholder="Email"
            className="w-full h-14 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-glass)] px-5 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-300 focus:border-[var(--primary)] focus:shadow-[var(--shadow-purple)]"
          />
          {errors.email && <p className="text-[var(--danger)]">{errors.email.message}</p>}

          <input
            {...register("password", {
              required: "Password is requred",
              minLength: {
                value: 6,
                message: "Minimum 6 Characters is Reuiqred",
              },
              maxLength: {
                value: 12,
                message: "Maximum is 12 Characters is required",
              },
            })}
            type="password"
            placeholder="Password"
            className="w-full h-14 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-glass)] px-5 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-300 focus:border-[var(--primary)] focus:shadow-[var(--shadow-purple)]"
          />
          {errors.password && <p className="text-[var(--danger)]">{errors.password.message}</p>}

          <input
            {...register("confirmPassword", {
              required: "Confirm Password is requred",
            })}
            type="password"
            placeholder="Confirm Password"
            className="w-full h-14 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-glass)] px-5 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-300 focus:border-[var(--primary)] focus:shadow-[var(--shadow-purple)]"
          />
          {errors.confirmPassword && <p className="text-[var(--danger)]">{errors.confirmPassword.message}</p>}
        </div>

        <button
          className="
        h-14
        rounded-xl
        text-[var(--btn-text)]
        font-semibold
        transition-all
        duration-300
        shadow-[var(--shadow-button)]
        hover:scale-[1.02]
        active:scale-95
      "
          style={{
            background: "var(--btn-gradient)",
          }}
        >
          Create Account
        </button>

        <p className="text-center text-[var(--text-secondary)]">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-[var(--primary-light)] cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
